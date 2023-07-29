import React from 'react'
import { Box, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search' // Import the search icon from Material-UI
import FavoriteIcon from '@mui/icons-material/Favorite'
import ClearIcon from '@mui/icons-material/Clear' // Import the clear icon from Material-UI
import { useDispatch, useSelector } from 'react-redux'
import { useSpells } from '../../../hooks/useSpells'
import LoadingSpinner from '../../common/loader/LoadingSpinner'
import GridCard from '../../common/card/GridCard'
import CustomPagination, {
  ITEMS_PER_PAGE,
} from '../../common/pagination/CustomPagination'
import {
  setSearchQuery,
  setCurrentPage,
  ISpellState,
  removeItemFromFavorite,
  setItemToFavorite,
} from '../../../store/features/spellsSlice'
import { RootState } from '../../../store/store'

const DisplaySpells: React.FC = () => {
  const spellsQuery = useSpells()
  const dispatch = useDispatch()
  const { spells, currentPage, searchQuery } = useSelector(
    (state: RootState): ISpellState => state.spells
  )

  function handleFavorite(item: any) {
    if (
      spells.length >= 1 &&
      spells?.some((spell) => spell.index === item.index)
    ) {
      const filterSpells = spells.filter((spell) => spell.name !== item.name)
      dispatch(removeItemFromFavorite(filterSpells))
    } else {
      dispatch(setItemToFavorite([...spells, item]))
    }
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setSearchQuery(event.target.value))
    dispatch(setCurrentPage(1))
  }

  function handleClearSearch() {
    dispatch(setSearchQuery(''))
    dispatch(setCurrentPage(1))
  }

  const filteredSpells = spellsQuery.data?.results?.filter((spell) =>
    spell.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const paginatedSpells = filteredSpells?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <>
      {spellsQuery.isError && <div> Error...</div>}
      {spellsQuery.isLoading && <LoadingSpinner />}
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <TextField
            sx={{
              color: 'black',
              backgroundColor: 'white',
              mb: '20px',
              width: '50%',
            }}
            variant="outlined"
            placeholder="Search spell...."
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {searchQuery && (
                    <ClearIcon
                      onClick={handleClearSearch}
                      sx={{ cursor: 'pointer' }}
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 2, sm: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {spellsQuery.isSuccess &&
            paginatedSpells?.map((item) => (
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
                  <IconButton
                    onClick={() =>
                      handleFavorite({ index: item.index, name: item.name })
                    }
                  >
                    <FavoriteIcon
                      sx={{
                        color: spells?.some(
                          (spell) => spell.index === item.index
                        )
                          ? '#fb97a9'
                          : 'inherit',
                      }}
                    />
                  </IconButton>
                </Box>
              </GridCard>
            ))}
        </Grid>
        {spellsQuery.isSuccess && <CustomPagination spells={filteredSpells} />}
      </Box>
    </>
  )
}

export default DisplaySpells
