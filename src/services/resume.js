import superJobApi from './superJobApi'

export default {
    findByKeyword(keyword) {
        return superJobApi.get(`/resumes?keyword=${keyword}`)
    },
    findById(id) {
        return superJobApi.get(`/resumes?ids[]=${id}`)
    },
    findByIdsArray(ids) {
        console.log(ids)
        console.log('query', `/resumes?`+ids)
        return superJobApi.get(`/resumes?` + ids)
    }
}