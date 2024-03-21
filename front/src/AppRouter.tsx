// Routeur
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import Menu from './components/menu/Menu'
import PlayerSelection from './pages/PlayerSelection/PlayerSelection.tsx'
import EditScenarioPage from './pages/EditScenarioPage'
import { ScenarioHistoryList } from './pages/ScenarioHistory'
import { PlayerList } from './pages/PlayerList/PlayerList.tsx'

/**
 * Renders the application content.
 * @returns {React.FC} The rendered component
 */
const AppContent: React.FC = () => {
  const location = useLocation() // Get the current path

  /**
   * Render the application routes and the menu.
   * The menu is not displayed on the home page.
   */
  return (
    <>
      {location.pathname !== '/' && <Menu />}
      {/* Non affichage du menu dans l'accueil */}
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scenario" element={<EditScenarioPage />} />
          <Route path="/history" element={<ScenarioHistoryList />} />
          <Route path="/player" element={<PlayerSelection />} />
          <Route path="/players" element={<PlayerList />} />
        </Routes>
      </div>
    </>
  )
}

const AppRouter: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
)

export default AppRouter
