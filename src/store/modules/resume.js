import resume from '../../services/resume'
import users from '../../services/users'

export const state = {
    allResumes: [],
    recommendedResumes: [],
    errors: [],
    resumeToRate: {},
    currentSpec: '',
    approvedResume: [],
    usersResumeStatus: []
}
export const mutations = {
    INITIALIZE_ALLRESUMES(state) {
        state.allResumes = JSON.parse(localStorage.getItem('all-resumes'))
    },
    SET_ALLRESUMES(state, resumes) {
        localStorage.setItem('all-resumes', JSON.stringify(resumes.objects))
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
    },
    SET_APPROVED_RESUME(state, data) {
        console.log(data)
        state.approvedResume = data.reverse()
    },
    SET_RESUME_WITH_STATUS(state, data) {
        state.usersResumeStatus = data
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
    },
    getResumeById({commit}, data) {
        commit('START_LOADING', 'Ищем резюме...')
        return resume.findById(data.id)
            .then(res => {
                commit('SET_RESUME_TO_RATE', res.data.objects[0])
                commit('FINISH_LOADING')
            })
            .catch(err => {
                commit('SET_ERRORS', err)
                commit('FINISH_LOADING')
            })
    },
    addResumeToRated({commit}, data) {
        console.log(data)
        return users.addResumeToRated(data)
            .then(res => {
                console.log('Успешно добавлено', res)
            })
            .catch(err => {
                commit('SET_ERRORS', err)
            })
    },
    getApprovedResume({commit}, data) {
        commit('START_LOADING', 'Ищем резюме...')
        return users.getRatedResumeById(data.userId)
            .then(res => {
                const usersInfo = res.data.approvedResume
                commit('SET_RESUME_WITH_STATUS', usersInfo)
                let idsString = ''
                res.data.approvedResume.forEach(el => {
                    idsString += `ids[]=${el.resumeId}&`
                })
                return resume.findByIdsArray(idsString)
                    .then(res => {
                        commit('SET_APPROVED_RESUME', res.data.objects)
                        commit('FINISH_LOADING')
                    })
                    .catch(err => {
                        commit('SET_ERRORS', err)
                        commit('FINISH_LOADING')
                    })
            })
            .catch(err => {
                    commit('SET_ERRORS', err)
                    commit('FINISH_LOADING')
                }
            )
    }
}
export const getters = {}