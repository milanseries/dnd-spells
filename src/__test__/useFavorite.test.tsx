import { renderHook, act } from '@testing-library/react'
import { useFavorite, FavoriteConfig } from '../hooks/useFavorite'
import { useLocalStorageMock } from './mocks/hooks.mock'

const localStorageMock: { [key: string]: string } = {}
const testDndFavoritesKey = 'test-dnd-favorites'

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (key: string) => localStorageMock[key] || null,
    setItem: (key: string, value: string) => {
      localStorageMock[key] = value
    },
    removeItem: (key: string) => {
      delete localStorageMock[key]
    },
    clear: () => {
      Object.keys(localStorageMock).forEach((key) => {
        delete localStorageMock[key]
      })
    },
  },
  writable: true,
})

jest.doMock('../hooks/useLocalStorage', () => {
  return {
    useLocalStorageMock,
  }
})

function setupHook(config: FavoriteConfig) {
  return renderHook(() => useFavorite(config))
}

describe('useFavorite', () => {
  afterEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  it('should initialize with empty favoritedItems', () => {
    const { result } = setupHook({ key: testDndFavoritesKey })
    expect(result.current.favoritedItems).toEqual([])
  })

  it('should add an item to favoritedItems when handleFavorite is called with a new item', () => {
    const { result } = setupHook({ key: testDndFavoritesKey })
    expect(result.current.favoritedItems).toEqual([]) // No items initially
    act(() => {
      result.current.handleFavorite({ index: 'item1' }) // Add a new item
    })
    expect(result.current.favoritedItems).toEqual([{ index: 'item1' }]) // Verify that the item is added to favoritedItems
    expect(localStorage.getItem(testDndFavoritesKey)).toEqual(
      JSON.stringify([{ index: 'item1' }])
    ) // Verify that the item is stored in localStorage
  })

  it('should add multiple items to favoritedItems when handleFavorite is called with new items', () => {
    const { result } = setupHook({ key: testDndFavoritesKey })
    expect(result.current.favoritedItems).toEqual([]) // No items initially
    // click twice to add two new items
    act(() => {
      result.current.handleFavorite({ index: 'item1' })
      result.current.handleFavorite({ index: 'item2' })
    })

    // Verify that the items are added to favoritedItems
    expect(result.current.favoritedItems).toEqual([
      { index: 'item1' },
      { index: 'item2' },
    ])
    expect(localStorage.getItem(testDndFavoritesKey)).toEqual(
      JSON.stringify([{ index: 'item1' }, { index: 'item2' }])
    )
  })

  it('should remove an item from favoritedItems when handleFavorite is called with an existing item', () => {
    localStorage.setItem(
      testDndFavoritesKey,
      JSON.stringify([{ index: 'item1' }])
    ) // Initialize with a favorited item
    const { result } = setupHook({ key: testDndFavoritesKey })
    expect(result.current.favoritedItems).toEqual([{ index: 'item1' }]) // Check the initial state with an item

    // click to remove the item
    act(() => {
      result.current.handleFavorite({ index: 'item1' })
    })
    expect(result.current.favoritedItems).toEqual([]) // Verify that the item is removed from favoritedItems
    expect(localStorage.getItem(testDndFavoritesKey)).toEqual('[]') // Verify that the item is removed from localStorage
  })
})
