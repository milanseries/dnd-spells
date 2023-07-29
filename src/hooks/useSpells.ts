import { useQuery } from '@tanstack/react-query'
import { spellApi } from '../services/axios/api/spell-api'

export function useSpells() {
  return useQuery(['spells'], spellApi.getAllSpells, {
    retry: 0,
    refetchOnMount: false,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    // cacheTime: 0,
  })
}
