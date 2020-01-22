import superJobApi from './superJobApi'

export default {
    findByKeyword(data) {
        return superJobApi.get(`/resumes?keyword=${data.keyword}&${data.excludedResumes}`)
    },
    findRecommended(data) {
        return superJobApi.get(`/resumes?keyword=${data.keyword}&${data.excludedResumes}`)
    },
    findById(id) {
        return superJobApi.get(`/resumes?ids[]=${id}`)
    },
    findByIdsArray(ids) {
        return superJobApi.get(`/resumes?` + ids + '&count=100')
    }
}