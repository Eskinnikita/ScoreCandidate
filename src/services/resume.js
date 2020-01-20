import superJobApi from './superJobApi'

export default {
    findByKeyword(data) {
        console.log(data.keyword, data.excludedResumes)
        return superJobApi.get(`/resumes?keyword=${data.keyword}&${data.excludedResumes}`)
    },
    findById(id) {
        return superJobApi.get(`/resumes?ids[]=${id}`)
    },
    findByIdsArray(ids) {
        return superJobApi.get(`/resumes?` + ids + '&count=100')
    }
}