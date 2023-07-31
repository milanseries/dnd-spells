import { ISpellList, ISpell } from '../../models/types/spell.types'
import { normalAxios } from '../default'

export const spellApi = {
  /**
   * Fetches all spells from the API.
   * @async
   * @function fetchAllSpells
   * @returns {Promise<ISpellList>} A Promise that resolves to an object of type ISpellList.
   * @throws {Error} If there is an issue with the HTTP request or the response structure is invalid.
   */
  fetchAllSpells: async (): Promise<ISpellList> => {
    return normalAxios.get('/spells')
  },

  /**
   * Fetches details of a specific spell based on its index from the server.
   * @async
   * @function fetchSpellByIndex
   * @param {string} index - The index of the spell to be fetched.
   * @returns {Promise<ISpell>} A Promise that resolves to an object representing the spell details.
   * @throws {Error} If there is an issue with the HTTP request or the response structure is invalid.
   */
  fetchSpellByIndex: async (index: string): Promise<ISpell> => {
    return normalAxios.get(`/spells/${index}`)
  },
}
