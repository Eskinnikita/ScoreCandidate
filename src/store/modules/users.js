import usersService from '../../services/users'

export const state = {
    status: '',
    error: '',
    users: []
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
    },
    ADD_USER(state, user) {
        state.users.push(user)
    },

    SET_USERS(state, users) {
        console.log(users)
        state.users = users
    },
    REMOVE_USER(state, id) {
        console.log('работает')
        const userToDeleteIndex = state.users.findIndex(el => el._id === id)
        state.users.splice(userToDeleteIndex, 1)
    }
}
export const actions = {
    addUser({commit}, user) {
        return usersService.addUser(user)
            .then(res => {
                commit('ADD_USER', res.data.user)
                commit('ADD_SUCCESS', 'Пользователь успешно добавлен')
            })
            .catch(err => {
                commit('ADD_ERROR', err.message = 'Ошибка добавления')
            })
    },
    getUsers({commit}) {
        return usersService.getUsers()
            .then(res => {
                console.log(res)
                commit('SET_USERS', res.data)
            })
            .catch(err => {
                console.log({error: err.message})
            })
    },
    deleteUser({commit}, id) {
        console.log(id)
        return usersService.deleteUser(id.id)
            .then(() => {
                commit('REMOVE_USER', id.id)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const getters = {

}