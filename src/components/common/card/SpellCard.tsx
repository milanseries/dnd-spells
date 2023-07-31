import React from 'react'
import { Box, Card, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ISpellListItem } from '../../../services/models/types/spell.types'
import './SpellCard.css'

interface SpellCardProps {
  spell: ISpellListItem
  isFavorited: boolean
  handleFavorite: (spell: ISpellListItem) => void // A function that takes a Spell object and returns nothing
}

const SpellCard: React.FC<SpellCardProps> = ({
  spell,
  isFavorited,
  handleFavorite,
}) => {
  return (
    <Card className={'spell-card'}>
      <Box className={'spell-card-box'}>
        {spell.name}
        <IconButton
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            handleFavorite(spell)
          }}
        >
          <FavoriteIcon sx={{ color: isFavorited ? '#fb97a9' : 'inherit' }} />
        </IconButton>
      </Box>
    </Card>
  )
}

export default SpellCard
