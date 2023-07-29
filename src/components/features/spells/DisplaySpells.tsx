import React from 'react'
import { Box, Grid, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSpells } from '../../../hooks/useSpells'
import LoadingSpinner from '../../common/loader/LoadingSpinner'
import GridCard from '../../common/card/GridCard'

const DisplaySpells: React.FC = () => {
  const spells = useSpells()

  return (
    <>
      {spells.isError && <div> Error...</div>}
      {spells.isLoading && <LoadingSpinner />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2, sm: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {spells.isSuccess &&
            spells.data?.results.map((item) => (
              <GridCard key={item.index}>
                <Box
                  sx={{
                    justifyContent: 'space-between',
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    paddingRight: '20px',
                  }}
                >
                  {item.name}
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </Box>
              </GridCard>
            ))}
        </Grid>
      </Box>
    </>
  )
}

export default DisplaySpells
