import superJobApi from './superJobApi'

export default {
    findByKeyword(keyword) {
        return superJobApi.get(`/resumes?keyword=${keyword}`)
    },
    findById(id) {
        return superJobApi.get(`https://api.superjob.ru/2.0/resumes?ids[]=${id}`)
    }
}