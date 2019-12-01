import api from './api'

export default {
    login(data) {
        return api.post('/users/login', data)
    },
    logout() {
        return api.get('/users/me/logout')
    }
}