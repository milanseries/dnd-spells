import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_ENDPOINT
axios.defaults.headers.common.Accept = 'application/json'

/**
 * Axios instance with request and response interceptors.
 * @const normalAxios
 */
const normalAxios = axios.create({})

/**
 * Request interceptor for normalAxios.
 * @function
 * @name requestInterceptor
 * @param {Object} config - The Axios request configuration.
 * @returns {Object} The modified Axios request configuration.
 */
normalAxios.interceptors.request.use(
  (config) => {
    return config
  },
  async (error) => Promise.reject(error)
)

/**
 * Response interceptor for normalAxios.
 * @function
 * @name responseInterceptor
 * @param {Object} response - The Axios response object.
 * @returns {Object} The data from the Axios response.
 */
normalAxios.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => Promise.reject(error)
)

export { normalAxios }
