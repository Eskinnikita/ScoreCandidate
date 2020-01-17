import resume from '../../services/resume'
export const state = {
    allResumes: [],
    recommendedResumes: [],
    errors: [],
    resumeToRate: {},
    currentSpec: ''
}
export const mutations = {
    SET_ALLRESUMES(state, resumes) {
        state.allResumes = resumes.objects
    },
    SET_ERRORS(state, error) {
        state.errors.push(error)
    },
    SET_RESUME_TO_RATE(state, resume) {
        state.resumeToRate = resume
    },
    SET_CURRENT_SPEC(state, keyword) {
        state.currentSpec = keyword
    }
}
export const actions = {
    getResumes({commit}, data) {
        commit('START_LOADING', 'Собираем резюме...')
        commit('SET_CURRENT_SPEC', data.keyword)
        return resume.findByKeyword(data.keyword)
            .then(res => {
                commit('SET_ALLRESUMES', res.data)
                commit('FINISH_LOADING')
            })
            .catch(err => {
                commit('SET_ERRORS', err)
                commit('FINISH_LOADING')
            })
    }
}
export const getters = {
    
}