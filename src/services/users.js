import api from './api'

export default {
    addUser(user) {
        return api.post('/users', user)
    },
    getUsers() {
        return api.get('/users/all')
    },
    deleteUser(id) {
        return api.delete(`/users/${id}`)
    },
    addResumeToRated(data) {
        return api.post('/rated-resumes', data)
    },
    getRatedResumeById(id) {
        return api.get(`/rated-resumes/${id}`)
    }
}