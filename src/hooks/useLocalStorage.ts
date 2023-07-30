import React from 'react'

/**
 * A custom hook that synchronizes stateful data with the browser's localStorage.
 * @function useLocalStorage
 * @template T - The type of data to be stored in localStorage.
 * @param {string} key - The key under which the data will be stored in localStorage.
 * @param {T} initialValue - The initial value of the data.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} A tuple containing the current state and a function to update the state.
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = React.useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? (JSON.parse(storedValue) as T) : initialValue
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState] as const
}
