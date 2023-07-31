import React from 'react'

export const useFavoriteMock = jest.fn(() => ({
  favoritedItems: [],
  handleFavorite: jest.fn(),
  clearFavorites: jest.fn(),
}))

export const useLocalStorageMock = jest.fn((key: string, initialValue: any) => {
  const [state, setState] = React.useState(initialValue)

  // Mock the localStorage side effect (useEffect)
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
})
