import { useLocalStorage } from './useLocalStorage'

interface FavoriteConfig {
  key: string
}

/**
 * A custom hook to manage a list of favorited items and their state in localStorage.
 * @function useFavorite
 * @template T - The type of items that can be favorited, must have an 'index' property.
 * @param {FavoriteConfig} config - Configuration object to customize the key.
 * @returns {Object} An object containing favoritedItems, handleFavorite, and clearFavorites functions.
 *   - favoritedItems: An array of favorited items of type T.
 *   - handleFavorite: A function to add or remove an item from the favoritedItems list.
 *   - clearFavorites: A function to clear all items from the favoritedItems list.
 */
export const useFavorite = <T extends { index: string }>(
  config: FavoriteConfig
) => {
  const { key } = config
  const [favoritedItems, setFavoritedItems] = useLocalStorage<T[]>(key, [])

  function handleFavorite(item: T): void {
    const isItemFavorited = favoritedItems.some(
      (favItem) => favItem.index === item.index
    )

    if (isItemFavorited) {
      const updatedItems = favoritedItems.filter(
        (favItem) => favItem.index !== item.index
      )
      setFavoritedItems(updatedItems)
    } else {
      setFavoritedItems((prevFavorites) => [...prevFavorites, item])
    }
  }

  function clearFavorites(): void {
    setFavoritedItems([])
  }

  return {
    favoritedItems,
    handleFavorite,
    clearFavorites,
  }
}
