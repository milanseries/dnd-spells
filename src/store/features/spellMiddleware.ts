// eslint-disable-next-line import/named
import { Middleware } from '@reduxjs/toolkit'
import { APP_STORAGE_KEY } from '../../config/constants/app.constant'
import { spellSlice } from './spellSlice'

// eslint-disable-next-line prettier/prettier
type SpellsAction = ReturnType<
  (typeof spellSlice.actions)[keyof typeof spellSlice.actions]
>

const spellMiddleware: Middleware = () => (next) => (action: SpellsAction) => {
  if (action.type === spellSlice.actions.setItemToFavorite.type) {
    window.localStorage.setItem(
      APP_STORAGE_KEY.DND_FAVORITE_SPELLS,
      JSON.stringify(action.payload)
    )
  }

  if (action.type === spellSlice.actions.removeItemFromFavorite.type) {
    window.localStorage.setItem(
      APP_STORAGE_KEY.DND_FAVORITE_SPELLS,
      JSON.stringify(action.payload)
    )
  }

  if (action.type === spellSlice.actions.removeFavorites.type) {
    localStorage.removeItem(APP_STORAGE_KEY.DND_FAVORITE_SPELLS)
  }

  return next(action)
}

export default spellMiddleware
