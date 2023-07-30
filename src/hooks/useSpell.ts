import { useQuery } from '@tanstack/react-query'
import { spellApi } from '../services/axios/api/spellApi'

export default function useSpell(index: string) {
  return useQuery(
    ['spell', index],
    async () => await spellApi.fetchSpellByIndex(index),
    {
      retry: 0,
      refetchOnMount: false,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
}
