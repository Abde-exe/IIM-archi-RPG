/**
 * Schema interface represents a generic schema in the game.
 * It includes the name and description of the schema.
 */
interface Scene {
  title: string // The name of the schema
  location: string // The location of the schema
  description: string // The description of the schema
  characters: string[]
}

/**
 * Scenario interface represents a scenario in the game.
 * It includes the title, context, objectives, stakes, enemies, allies, resources, constraints, rewards, and stages of the scenario.
 */
interface Scenario {
  name: string // The title of the scenario
  description: string // The context of the scenario
  scenes: Scene[] // The scenes of the scenario
}

// Export the Scenario interface as the default export
export default Scenario
