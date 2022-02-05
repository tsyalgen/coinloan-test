import axios from 'axios'

export const fetchPairs = async function (){
    const response = await axios.get('/pairs')
    return response.data
}

export const fetchRates = async function (){
    const response = await axios.get('/rates')
    return response.data
}
