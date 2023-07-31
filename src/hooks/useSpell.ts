import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { spellApi } from '../services/axios/api/spellApi'
import { ISpell } from '../services/models/types/spell.types'

export default function useSpell(index: string): UseQueryResult<ISpell> {
  return useQuery(['spell', index], async () =>
    spellApi.fetchSpellByIndex(index)
  )
}
