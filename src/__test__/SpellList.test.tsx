import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import SpellList from '../components/features/spell/SpellList'
import { useFavoriteMock } from './mocks/hooks.mock'
import { mockSpellsList } from './mocks/data.mock'

jest.doMock('../hooks/useFavorite', () => {
  return {
    useFavoriteMock,
  }
})

describe('SpellList', () => {
  const renderSpellList = () => {
    render(
      <BrowserRouter>
        <SpellList spells={mockSpellsList} />
      </BrowserRouter>
    )
  }

  beforeEach(() => {
    renderSpellList()
  })

  it('renders the spell cards', () => {
    const spellCards = screen.getAllByRole('link', { name: 'spell-link' })
    expect(spellCards.length).toBe(mockSpellsList.results.length)
  })

  it('search functionality works correctly', () => {
    const searchInput = screen.getByRole('textbox')
    userEvent.type(searchInput, 'spell 1') // Type a search query
    expect(searchInput).toHaveValue('spell 1') // Check if the search query has been updated

    // Check if only one spell card is displayed after the search
    const spellCards = screen.getAllByRole('link', { name: /spell/i })
    expect(spellCards.length).toBe(1)
  })
})
