// Middleware provides a way to intercept dispatched actions before they reach the reducers, allowing you to perform additional logic, side effects, or transformations on the actions.
// eslint-disable-next-line import/named
import { Middleware } from '@reduxjs/toolkit'
import { spellSlice } from './spellSlice'

type SpellsAction = ReturnType<
  typeof spellSlice.actions[keyof typeof spellSlice.actions]
>

const spellMiddleware: Middleware =
  (store) => (next) => (action: SpellsAction) => {
    if (action.type === spellSlice.actions.setItemToFavorite.type) {
      window.localStorage.setItem(
        'favoritedSpells',
        JSON.stringify(action.payload)
      )
    }

    if (action.type === spellSlice.actions.removeItemFromFavorite.type) {
      window.localStorage.setItem(
        'favoritedSpells',
        JSON.stringify(action.payload)
      )
    }

    if (action.type === spellSlice.actions.removeFavorites.type) {
      localStorage.removeItem('favoritedSpells')
    }

    return next(action)
  }

export default spellMiddleware
