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
      <nav className="navbar">
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${
              location.pathname === '/' ? 'active ' : ''
            }`}
          >
            Home
          </Link>
          <Link to="/favorites" className="navbar-link">
            Favorites
          </Link>
        </div>
      </nav>
      <Box sx={{ padding: '26px' }}>
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
