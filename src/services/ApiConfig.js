import Axios from 'axios'

const BASE_URL = `https://5e31b0dcb92d240014ea4e31.mockapi.io/`

export const api = Axios.create({
    baseURL: BASE_URL,
})