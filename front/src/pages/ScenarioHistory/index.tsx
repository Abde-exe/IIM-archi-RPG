import { FC, useEffect, useState } from 'react'
import { api } from '../../services/api.ts'
import { ScenarioHistory } from './types.ts'
import { ScenarioHistoryItem } from './ScenarioHistoryItem'
import SideBar from '../../components/SideBar/SideBar.tsx'
import SidebarImg from '../../assets/CardsHP1.jpeg'

export const ScenarioHistoryList: FC = () => {
  const [scenarios, setScenarios] = useState<ScenarioHistory[]>([])
  useEffect(() => {
    const fetchScenarios = async () => {
      const response = await api.get('/scenarios')
      setScenarios(response.data.data)
    }
    fetchScenarios()
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        padding: '10px',
        height: '100%',
      }}
    >
      <SideBar pagesName="Scenario History" imgUrl={SidebarImg} />
      <ul
        style={{
          overflowY: 'scroll',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          flexGrow: 1,
          maxHeight: '100%',
          alignSelf: 'flex-start',
        }}
      >
        {scenarios.map((scenario) => (
          <ScenarioHistoryItem key={scenario.id} scenario={scenario} />
        ))}
      </ul>
    </div>
  )
}
