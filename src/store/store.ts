import { configureStore } from '@reduxjs/toolkit'
import spellsSlice from './features/spellsSlice'

export const store = configureStore({
  reducer: {
    spells: spellsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
