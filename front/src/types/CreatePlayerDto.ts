/**
 * Player interface represents a player in the game.
 * It includes the player's name, profession, clearance level, and physical, mental, and social attributes.
 */

export interface Adjective {
  name: string
}

interface CreatePlayerDto {
  name: string // The name of the player
  profession: string // The profession of the player
  clearance: string // The clearance level of the player
  socials: Adjective[] // The physical attributes of the player
  mentals: Adjective[] // The mental attributes of the player
  physicals: Adjective[] // The social attributes of the player
  id: number
}

export interface GetPlayerItem {
  attributes: {
    name: string // The name of the player
    profession: string // The profession of the player
    clearance: string // The clearance level of the player
    socials: Adjective[] // The physical attributes of the player
    mentals: Adjective[] // The mental attributes of the player
    physicals: Adjective[] // The social attributes of the player}
  }
  id: number
}

// Export the Player interface as the default export
export default CreatePlayerDto
