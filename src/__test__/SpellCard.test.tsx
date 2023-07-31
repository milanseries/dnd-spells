import { render, screen, fireEvent } from '@testing-library/react'
import SpellCard from '../components/common/card/SpellCard'
import { mockSpellListItem } from './mocks/data.mock'

// Mock the handleFavorite function
const handleFavoriteMock = jest.fn()

function renderSpellCard(isFavorited: boolean) {
  return render(
    <SpellCard
      spell={mockSpellListItem}
      isFavorited={isFavorited}
      handleFavorite={handleFavoriteMock}
    />
  )
}

describe('SpellCard component', () => {
  it('renders spell name and favorite button', () => {
    renderSpellCard(false)

    const spellNameElement = screen.getByText(mockSpellListItem.name)
    expect(spellNameElement).toBeInTheDocument() // Assert that the spell name is rendered correctly

    const favoriteButton = screen.getByRole('button', { name: 'Favorite' }) // Assert that the favorite button is rendered correctly
    expect(favoriteButton).toBeInTheDocument()
  })

  it('calls handleFavorite when favorite button is clicked', () => {
    renderSpellCard(true)

    const favoriteButton = screen.getByRole('button', { name: 'Favorite' })
    fireEvent.click(favoriteButton) // Simulate clicking on the favorite button

    expect(handleFavoriteMock).toHaveBeenCalledWith(mockSpellListItem)
  })

  it('FavoriteIcon color changes when isFavorited prop changes', () => {
    const { rerender } = renderSpellCard(false)
    const favoriteIcon = screen.getByTestId('FavoriteIcon')
    expect(favoriteIcon).toHaveStyle({ color: 'inherit' }) // Assert that the FavoriteIcon has the default color

    // Re-render the SpellCard component with isFavorited as true
    rerender(
      <SpellCard
        spell={mockSpellListItem}
        isFavorited={true}
        handleFavorite={handleFavoriteMock}
      />
    )

    expect(favoriteIcon).toHaveStyle({ color: '#fb97a9' }) // Assert that the FavoriteIcon color changes to '#fb97a9' when isFavorited is true
  })
})
