import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SpellCard from '../components/common/card/SpellCard'

// Mock the handleFavorite function
const handleFavoriteMock = jest.fn()

// Sample data for testing
const testSpell = {
  index: 'test-spell',
  name: 'Test Spell',
  url: '/api/test-spell',
}

// Reusable function to render the SpellCard component
const renderSpellCard = (isFavorited: boolean) => {
  return render(
    <SpellCard
      spell={testSpell}
      isFavorited={isFavorited}
      handleFavorite={handleFavoriteMock}
    />
  )
}

describe('SpellCard component', () => {
  it('renders spell name and favorite button', () => {
    // Render the SpellCard component with isFavorited as false
    renderSpellCard(false)

    // Assert that the spell name is rendered correctly
    const spellNameElement = screen.getByText(testSpell.name)
    expect(spellNameElement).toBeInTheDocument()

    // Assert that the favorite button is rendered correctly
    const favoriteButton = screen.getByRole('button', { name: 'Favorite' })
    expect(favoriteButton).toBeInTheDocument()
  })

  it('calls handleFavorite when favorite button is clicked', () => {
    // Render the SpellCard component with isFavorited as true
    renderSpellCard(true)

    // Simulate clicking on the favorite button
    const favoriteButton = screen.getByRole('button', { name: 'Favorite' })
    fireEvent.click(favoriteButton)

    // Assert that the handleFavoriteMock function was called with the testSpell data
    expect(handleFavoriteMock).toHaveBeenCalledWith(testSpell)
  })

  it('FavoriteIcon color changes when isFavorited prop changes', () => {
    // Render the SpellCard component with isFavorited as false
    const { rerender } = renderSpellCard(false)

    // Assert that the FavoriteIcon has the default color
    const favoriteIcon = screen.getByTestId('FavoriteIcon')
    expect(favoriteIcon).toHaveStyle({ color: 'inherit' })

    // Re-render the SpellCard component with isFavorited as true
    rerender(
      <SpellCard
        spell={testSpell}
        isFavorited={true}
        handleFavorite={handleFavoriteMock}
      />
    )

    // Assert that the FavoriteIcon color changes to '#fb97a9' when isFavorited is true
    expect(favoriteIcon).toHaveStyle({ color: '#fb97a9' })
  })
})
