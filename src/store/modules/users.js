import usersService from '../../services/users'

export const state = {
    status: '',
    error: ''
}
export const mutations = {
    ADD_SUCCESS(state, status) {
        state.status = status
        setTimeout(() => {
            state.status = ''
        }, 3000)
    },
    ADD_ERROR(state, status) {
        state.error = status
        setTimeout(() => {
            state.error = ''
        }, 3000)
    }
}
export const actions = {
    addUser({commit}, user) {
        return usersService.addUser(user)
            .then(() => {
                commit('ADD_SUCCESS', 'Пользователь успешно добавлен')
            })
            .catch(err => {
                commit('ADD_ERROR', err.error)
            })
    }
}
export const getters = {

}