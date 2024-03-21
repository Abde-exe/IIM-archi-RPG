from flask import Flask, request, jsonify
from markupsafe import escape
import pandas as pd
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, ServiceContext
from llama_index.llms.ollama import Ollama
from llama_index.core.storage.storage_context import StorageContext
from llama_index.vector_stores.qdrant import QdrantVectorStore
from llama_index.core import Settings
import qdrant_client
import json
import os
import random

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, World!"

@app.route('/generate', methods=['POST'])
def generate():
  # Get the data from the request
  data = request.json
  characters = data.get('characters')
  customPrompt = data.get('prompt')

  concatenated_names = ', '.join([' '.join(name.split()) for name in characters])

  defaultPrompt = "You are the game master of a role-playing game. Generate a scenario for me in the world of espionage. The scenario should contain keys as 'title', 'description' and 'scenes' . I want the scenario in JSON format. In the scenario the scene key should be an array, each element representing a scene. A scene has the following fields: 'characters', 'location', 'description', and 'name'. I only want a JSON format response. Choose from the following list the characters you want to include in the scenario:" + concatenated_names + ". For the description of each scene, detail each it with at least 100 words. You should generate at least 3 scenes in the scenario. Take this into account as well:" + customPrompt

  llm = Ollama(model="mistral", request_timeout=900.0)
  response = llm.complete(defaultPrompt)

  return json.loads(str(response))

@app.route('/advance', methods=['POST'])
def advance():
  # Get the data from the request
  data = request.json
  characters = data.get('characters')
  customPrompt = data.get('prompt')

  # Get the articles and select a random one
  contents_array = []
  directory = "data"
  for filename in os.listdir(directory):
    if filename.endswith(".txt"):
      # Construct the full path to the file
      file_path = os.path.join(directory, filename)

      # Open the file and read its contents
      with open(file_path, "r") as file:
          # Read the contents of the file and append it to the array
          contents_array.append(file.read())
  article = random.choice(contents_array)

  # Prepare the names for the prompt
  concatenated_names = ', '.join([' '.join(name.split()) for name in characters])

  defaultPrompt = "You are the game master of a TTRPG (Table Top Role play game). Generate a scenario for me to play with friend, in the world of espionage. The scenario should contain keys as 'title', 'description' and 'scenes' . I want the scenario in JSON format. In the scenario the scene key should be an array, each element representing a scene. A scene has the following fields: 'characters', 'location', 'description', and 'name'. I only want a JSON format response. Choose from the following list the characters you want to include in the scenario:" + concatenated_names + ". For the description of each scene, detail each it with at least 100 words. You should generate at least 3 scenes in the scenario. Inspire you from these real life history:" + article

  llm = Ollama(model="mistral", request_timeout=900.0)
  response = llm.complete(defaultPrompt)

  return json.loads(str(response))