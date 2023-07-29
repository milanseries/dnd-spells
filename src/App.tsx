import React from 'react'
import { Box } from '@mui/material'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import FavoriteSpellsPage from './pages/FavoriteSpellsPage'
import HomePage from './pages/HomePage'
import SpellDetailPage from './pages/SpellDetailPage'

function App() {
  const location = useLocation()

  return (
    <React.Fragment>
      <Box sx={{ padding: '26px', backgroundColor: '#EDF4FF' }}>
        <Box sx={{ textAlign: 'center' }}>
          <nav>
            <Link
              to="/"
              style={{
                fontSize: '26px',
                fontWeight: '600',
                padding: '4px',
                color: location.pathname === '/' ? 'blue' : '',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>{' '}
            <Link
              to="/favorites"
              style={{
                fontSize: '26px',
                fontWeight: '600',
                padding: '4px',
                color: location.pathname === '/favorites' ? 'blue' : '',
                textDecoration: 'none',
              }}
            >
              Favorites
            </Link>
          </nav>
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="spells/:index" element={<SpellDetailPage />} />
          <Route path="/favorites" element={<FavoriteSpellsPage />} />
        </Routes>
      </Box>
    </React.Fragment>
  )
}

export default App
