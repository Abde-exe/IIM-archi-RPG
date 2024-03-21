import { FC } from 'react'
import CreatePlayerDto from '../../../types/CreatePlayerDto.ts'
import { api } from '../../../services/api.ts'
import { useAtom } from 'jotai'
import { characterInfos } from '../../../components/atoms.ts'
import { useNavigate } from 'react-router-dom'
import './PlayerCreateCta.scss'
import RightArrow from '../../../assets/right-arrow.png'

function toAdjectives(adjectives: string[]): { name: string }[] {
  return adjectives.map((name) => ({ name }))
}

export const PlayerCreateCta: FC = () => {
  const [character] = useAtom(characterInfos)
  const navigate = useNavigate()

  async function onClick() {
    const player: Omit<CreatePlayerDto, 'id'> = {
      name: character.infos.name,
      profession: character.infos.profession,
      clearance: character.infos.clearance,
      physicals: toAdjectives(character.adjectives.PHYSICAL),
      mentals: toAdjectives(character.adjectives.MENTAL),
      socials: toAdjectives(character.adjectives.SOCIAL),
    }
    await api.post('/players', { data: player })
    navigate('/players')
  }

  return (
    <button className="player-create-cta" onClick={onClick}>
      <img src={RightArrow} />
      <span className="player-create-cta__label">Go with this player</span>
      <span>{character.infos.name}</span>
    </button>
  )
}
