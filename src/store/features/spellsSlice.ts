import { createSlice } from '@reduxjs/toolkit'

export interface ISpellState {
  currentPage: number
  spells: [{ index: string; name: string }]
  searchQuery: string
}

const initialState: ISpellState = {
  spells: JSON.parse(localStorage.getItem('spells') ?? '[]') || [],
  currentPage: 1,
  searchQuery: '',
}

const spellsSlice = createSlice({
  name: 'spells',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setItemToFavorite: (state, action) => {
      state.spells = action.payload
    },
    removeItemFromFavorite: (state, action) => {
      state.spells = action.payload
    },

    removeFavorites: (state, action) => {
      state.spells = action.payload
    },
  },
})

export const {
  setCurrentPage,
  setSearchQuery,
  setItemToFavorite,
  removeItemFromFavorite,
  removeFavorites,
} = spellsSlice.actions
export default spellsSlice.reducer
