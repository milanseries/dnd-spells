import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Grid, Box, IconButton, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import GridCard from '../components/common/card/GridCard'
import { useFavorite } from '../hooks/useFavorite'
import { ISpellListItem } from '../services/models/types/spell.types'

const FavoriteSpellsPage: React.FC = () => {
  const { favoritedItems, handleFavorite, clearFavorites } =
    useFavorite<ISpellListItem>()

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          marginBottom: '14px',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h5">
            {favoritedItems?.length} Favorites
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={clearFavorites}
            variant="contained"
            disabled={!!(favoritedItems?.length < 1)}
          >
            Clear all
          </Button>
        </Box>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 2, sm: 2 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {favoritedItems?.map((spell) => (
          <GridCard key={spell.index}>
            <Link
              to={`/spells/${spell.index}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  paddingRight: '20px',
                }}
              >
                {spell.name}
                <IconButton
                  onClick={(e): void => {
                    e.stopPropagation()
                    e.preventDefault()
                    handleFavorite(spell)
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      color: favoritedItems?.some(
                        (spellFav) => spellFav.index === spell.index
                      )
                        ? '#fb97a9'
                        : 'inherit',
                    }}
                  />
                </IconButton>
              </Box>
            </Link>
          </GridCard>
        ))}
      </Grid>
    </>
  )
}

export default FavoriteSpellsPage
