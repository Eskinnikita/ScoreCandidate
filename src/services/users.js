import api from './api'
export default {
    addUser(user) {
        return api.post('/users', user)
    }
}