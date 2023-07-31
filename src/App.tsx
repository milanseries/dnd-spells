import React from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FavoriteSpellsPage from './pages/FavoriteSpellsPage'
import HomePage from './pages/HomePage'
import SpellDetailPage from './pages/SpellDetailPage'
import { ROUTE_PATHS } from './config/constants/routes.constant'
import Navbar from './components/common/nav/Navbar'
import ErrorBoundary from './components/common/ErrorBoundary'

const navigators = [
  { name: 'Home', route: ROUTE_PATHS.HOME },
  { name: 'Favorites', route: ROUTE_PATHS.FAVORITE_SPELLS },
]

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar navigators={navigators} />
      <ErrorBoundary>
        <Box sx={{ padding: '26px' }}>
          <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
            <Route
              path={ROUTE_PATHS.SPELL_DETAIL}
              element={<SpellDetailPage />}
            />
            <Route
              path={ROUTE_PATHS.FAVORITE_SPELLS}
              element={<FavoriteSpellsPage />}
            />
          </Routes>
        </Box>
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default App
