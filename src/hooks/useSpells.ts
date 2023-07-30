import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { spellApi } from '../services/axios/api/spellApi'
import { ISpellList } from '../services/models/types/spell.types'

export function useSpells(): UseQueryResult<ISpellList> {
  return useQuery(['spells'], spellApi.fetchAllSpells, {
    retry: 0,
    refetchOnMount: false,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  })
}
