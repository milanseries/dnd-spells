import { normalAxios } from '../default'

/**
 * Represents the response object returned by the Spell API when fetching all spells.
 * @interface ISpellResponse
 * @property {number} count - The total count of spells returned in the response.
 * @property {Array<{ index: string; name: string; url: string }>} results - An array of objects representing individual spells.
 */
export interface ISpellResponse {
  count: number
  results: [{ index: string; name: string; url: string }]
}

export const spellApi = {
  /**
   * Fetches all spells from the API.
   * @async
   * @function getAllSpells
   * @returns {Promise<ISpellResponse>} A Promise that resolves to an object of type ISpellResponse.
   * @throws {Error} If there is an issue with the HTTP request or the response structure is invalid.
   */
  getAllSpells: async (): Promise<ISpellResponse> => {
    return await normalAxios.get('/spells')
  },
}
