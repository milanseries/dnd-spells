import React from 'react'
import { Grid, Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useFavorite } from '../hooks/useFavorite'
import { ISpellListItem } from '../services/models/types/spell.types'
import { APP_STORAGE_KEY } from '../config/constants/app.constant'
import SpellCard from '../components/common/card/SpellCard'

const FavoriteSpellsPage: React.FC = () => {
  const { favoritedItems, handleFavorite, clearFavorites } =
    useFavorite<ISpellListItem>({
      key: APP_STORAGE_KEY.DND_FAVORITE_SPELLS,
    })

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
          <Grid item xs={4} md={3} lg={2} key={spell.index}>
            <Link
              to={`/spells/${spell.index}`}
              style={{ textDecoration: 'none' }}
            >
              <SpellCard
                spell={spell}
                isFavorited={favoritedItems?.some(
                  (spellFav) => spellFav.index === spell.index
                )}
                handleFavorite={handleFavorite}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default FavoriteSpellsPage
