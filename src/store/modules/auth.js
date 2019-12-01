import authService from '../../services/auth'
// import axios from 'axios' 

// export const namespaced = true;

export const state = {
    token: localStorage.getItem('user-token') || '',
    status: '',
    user: {}
}
export const mutations = {
    AUTH_SUCCESS(state, user) {
        state.status = 'success'
        state.token = user.token
        state.user = user.user
    },
    AUTH_ERROR(state) {
        state.status = 'error'
    },
    AUTH_LOGOUT(state) {
        state.token = null
        state.user = {}
    },
    INITIALIZE_AUTH_STORE(state) {
        state.user = JSON.parse(localStorage.getItem('user-data')) || {}
    }
}
export const actions = {
    authRequest({ commit, state }, data) {
        return authService.login(data)
            .then(res => {
                state.error = ''
                const user = {
                    token: res.data.token,
                    user: {}
                }
                const userParams = ['_id', 'name', 'surname', 'email', 'isAdmin']
                for(let key in res.data.user) {
                    if(userParams.indexOf(key) != -1) {
                        user.user[key] = res.data.user[key]
                    }
                }
                localStorage.setItem('user-data', JSON.stringify(user.user))
                localStorage.setItem('user-token', user.token)
                commit('AUTH_SUCCESS', user)
            })
            .catch(err => {
                commit('AUTH_ERROR', err)
                localStorage.removeItem('user-token')
                localStorage.removeItem('user-data')
            })
    },
    authLogout({commit}) {
        return new Promise((resolve) => {
            localStorage.removeItem('user-token')
            localStorage.removeItem('user-data')
            commit('AUTH_LOGOUT')
            resolve()
        })
    }
}
export const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
}