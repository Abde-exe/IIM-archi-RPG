// this component will display the scenario's details
// it will take the scenario as a prop
// if the scenario is null, it will display a message to the user
// otherwise it will display the scenario's details

import Scenario from '../../../types/Scenario.ts'
import './EditScenarioBody.scss'
import { FC } from 'react'

/**
 * Interface for the props of the EditScenarioBody component.
 * @interface
 * @property {Scenario | null} theScenario - The scenario to be displayed.
 */
interface GeneratedScenarioProps {
  theScenario: Scenario | null
}

/**
 * EditScenarioBody component is responsible for rendering the details of a scenario.
 * The scenario is passed as a prop.
 * If the scenario is null, the component displays a message to the user.
 * Otherwise, it displays the scenario's details, including the title, context, objectives, stakes, enemies, allies, resources, constraints, rewards, and stages.
 * @param {GeneratedScenarioProps} props - The props of the EditScenarioBody component.
 * @returns {React.FC} The rendered component
 */
const EditScenarioBody: FC<GeneratedScenarioProps> = ({ theScenario }) => {
  if (!theScenario) {
    return (
      <div>
        <p>Please create the scenario.</p>
      </div>
    )
  } else {
    return (
      <div className="scenario-body">
        <h2>Title: {theScenario.name ?? ''}</h2>
        <div>
          <h3>Description:</h3>
          <p>{theScenario.description ?? ''}</p>
        </div>
        <div>
          <h3>Scenes:</h3>
          {theScenario.scenes.map((scene, index) => (
            <div key={index}>
              <h4>Scene {index + 1}</h4>
              <p>Title: {scene.title}</p>
              <p>Location: {scene.location}</p>
              <p>Description: {scene.description}</p>
              <p>Characters: {scene.characters.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default EditScenarioBody
