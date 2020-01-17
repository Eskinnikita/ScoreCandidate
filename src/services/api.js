import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8082',
    // baseURL: 'http://test.std-272.ist.mospolytech.ru',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

export default apiClient