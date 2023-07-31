import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
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
import { APP_STORAGE_KEY } from '../../../config/constants/app.constant'
import SpellCard from '../../common/card/SpellCard'

interface SpellsListProps {
  spells: ISpellList
}

const SpellList: React.FC<SpellsListProps> = ({ spells }) => {
  const { favoritedItems, handleFavorite } = useFavorite<ISpellListItem>({
    key: APP_STORAGE_KEY.DND_FAVORITE_SPELLS,
  })
  const [currentPage, setCurrentPage] = useLocalStorage(
    APP_STORAGE_KEY.DND_CURRENT_PAGE,
    1
  )
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
          <Grid item xs={4} md={3} lg={2} key={spell.index}>
            <Link
              to={`/spells/${spell.index}`}
              style={{ textDecoration: 'none' }}
              aria-label="spell-link"
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
      <SimplePaginator
        totalCount={filteredSpells?.length ?? 1}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default SpellList
