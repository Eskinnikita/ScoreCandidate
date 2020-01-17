import axios from 'axios'

const apiKey = 'v3.r.129684112.f4daf6fe33d8e656e6a7da49f6850c048b9ce513.5c3647897ae7052446f9bc1baf88302e3b57dc66'


const superJobApiClient = axios.create({
    baseURL: 'https://api.superjob.ru/2.0',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin": "*",
        'X-Api-App-Id': apiKey
    },
    timeout: 10000
})

export default superJobApiClient