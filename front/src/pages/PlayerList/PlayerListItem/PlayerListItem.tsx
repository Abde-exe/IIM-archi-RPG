import { FC } from 'react'
import './PlayerListItem.scss'
import PlayerImg from '../../../assets/CardsHP1.jpeg'
import { GetPlayerItem } from '../../../types/CreatePlayerDto.ts'

export const PlayerListItem: FC<{ player: GetPlayerItem }> = ({ player }) => {
  return (
    <li className="player-list-item">
      <img src={PlayerImg} />
      <div>
        <b>{player.attributes.name}</b>
        <p>{player.attributes.profession}</p>
        <p>{player.attributes.clearance}</p>
      </div>
    </li>
  )
}
