import { configureStore } from '@reduxjs/toolkit'
import spellReducer from './features/spellSlice'
import spellMiddleware from './features/spellMiddleware'

export const store = configureStore({
  reducer: {
    spells: spellReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spellMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
