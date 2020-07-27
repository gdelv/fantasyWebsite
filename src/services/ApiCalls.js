import { api } from "./ApiConfig";

export const getTradingBlock = async () => {
    try {
        const resp = await api.get('/trading-block')
        return resp.data
    } catch (error) {
        throw error
    }
}

export const postPlayer = async playerData => {
    try {
        const resp = await api.post('/trading-block', playerData)
        return resp
    } catch (error) {
        throw error
    }
}