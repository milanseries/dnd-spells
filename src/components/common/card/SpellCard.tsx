import React from 'react'
import { Box, Card, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ISpellListItem } from '../../../services/models/types/spell.types'
import './SpellCard.css'

/**
 * The SpellCard component displays information about a spell and provides a favorite button.
 * @function SpellCard
 * @param {SpellCardProps} props - The props required for the SpellCard component.
 * @param {ISpellListItem} props.spell - An object representing the spell to be displayed.
 * @param {boolean} props.isFavorited - A boolean value indicating whether the spell is favorited or not.
 * @param {(spell: ISpellListItem) => void} props.handleFavorite - A callback function to handle favorite/unfavorite actions.
 * @returns {JSX.Element} The JSX element representing the SpellCard component.
 */
interface SpellCardProps {
  spell: ISpellListItem
  isFavorited: boolean
  handleFavorite: (spell: ISpellListItem) => void
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
          aria-label="Favorite"
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
