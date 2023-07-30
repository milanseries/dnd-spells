import { useQuery } from '@tanstack/react-query'
import { spellApi } from '../services/axios/api/spellApi'

export function useSpells() {
  return useQuery(['spells'], spellApi.fetchAllSpells, {
    retry: 0,
    refetchOnMount: false,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  })
}
