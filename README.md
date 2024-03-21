# Prerequisites

- Node.js 20.11.1
- Python 3.10

# Installation

Clone this project with your favorite way (SSH, HTTPS, GitHub CLI, etc.)
```bash
  npm install
```
copy the `.env.example` file to `.env` and fill in the required fields in both `back` and `front` workspaces.

```bash
  cd AI/
  pip install -r requirements.txt
```

# Commands

- `npm run dev` - Start the development server
- `npm run dev:front` - Start the development server in the `front` workspace
- `npm run dev:back` - Start the development server in the `back` workspace
- `npm run build` - Build the project
- `npm run build:front` - Build the project in the `front` workspace
- `npm run format` - Format the code with Prettier
- `npm run format:front` - Format the code in the `front` workspace
- `npm run format-check` - Check if the code is formatted correctly
- `npm run format-check:front` - Check if the code in the `front` workspace is formatted correctly


# Tech Stack

## Frontend
- React
- TypeScript

## Backend
- Node.js
- Strapi

# AI
- Ollama + Mistral
- Flask

# Structure

## Frontend
- `public/` - Static files
- `src/` - Entry point of the application
  - `src/assets/` - Images, fonts, etc.
  - `src/components/` - Reusable components
  - `src/pages/` - Pages
  - `src/services/` - API services
  - `src/types/` - Types


## Backend

- `config/` - Configuration files
- `database`
  - `migrations/`- Database migrations
- `public/` - Static files
- `src/` - Entry point of the backend
  - `src/admin/` - Admin panel
  - `src/api/` - API routes
  - `src/extensions/` - Extensions
- `types/`
  - `generated/` - Generated types

## AI

AI script is located in the AI folder in the app.py file.


# Endpoints usage

## Characters

### GET api/characters
Get all characters

### GET api/characters/:id
Get a character by id

### POST api/characters
Create a character

### PUT api/characters/:id
Update a character by id

### DELETE api/characters/:id
Delete a character by id

## Scenarios

### GET api/scenarios
Get all scenarios

### GET api/scenarios/:id
Get a scenario by id

### POST api/scenarios
Create a scenario

### PUT api/scenarios/:id
Update a scenario by id

### DELETE api/scenarios/:id
Delete a scenario by id


## Users

### POST api/auth/local
Login a user with email and password
```json
{
  "identifier": "email@example.com",
  "password": "password"
}
```