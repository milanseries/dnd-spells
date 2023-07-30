import { createSlice } from '@reduxjs/toolkit'
import { ISpellListItem } from '../../services/models/types/spell.types'

export interface ISpellState {
  favoritedSpells: ISpellListItem[]
}

const initialState: ISpellState = {
  favoritedSpells:
    JSON.parse(localStorage.getItem('favoritedSpells') ?? '[]') || [],
}

export const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    setItemToFavorite: (state, action) => {
      state.favoritedSpells = action.payload
    },
    removeItemFromFavorite: (state, action) => {
      state.favoritedSpells = action.payload
    },
    removeFavorites: (state, action) => {
      state.favoritedSpells = action.payload
    },
  },
})

export const { setItemToFavorite, removeItemFromFavorite, removeFavorites } =
  spellSlice.actions
export default spellSlice.reducer
