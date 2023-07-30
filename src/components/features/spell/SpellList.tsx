import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import GridCard from '../../common/card/GridCard'
import SimplePaginator, {
  ITEMS_PER_PAGE,
} from '../../common/pagination/SimplePaginator'
import SearchTextField from '../../common/textField/SearchTextField'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import {
  ISpellList,
  ISpellListItem,
} from '../../../services/models/types/spell.types'
import { useFavorite } from '../../../hooks/useFavorite'

interface SpellsListProps {
  spells: ISpellList
}
const SpellList: React.FC<SpellsListProps> = ({ spells }) => {
  const { favoritedItems, handleFavorite } = useFavorite<ISpellListItem>()
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1)
  const [searchQuery, setSearchQuery] = React.useState('')

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1) // Reset the current page when search query changes
  }

  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  const filteredSpells = spells?.results?.filter((spell) =>
    spell.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const paginatedSpells = filteredSpells?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <SearchTextField
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 2, sm: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {paginatedSpells?.map((spell) => (
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
                    onClick={(e) => {
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
        <SimplePaginator
          totalCount={filteredSpells?.length ?? 1}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  )
}

export default SpellList
