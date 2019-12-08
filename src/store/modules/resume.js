export const state = {
    testResume: [
        {name:'Петров Иван Васильевич', approved: null},
        {name:'Иванов Игорь Иванович', approved: null},
        {name:'Шевцов Петр Афанасьевич', approved: null},
        {name:'Жнецова Евгения Игоревна', approved: null}
    ]
}
export const mutations = {
    APPROVE_RESUME(state, {index, status}) {
        console.log(index, status);
        state.testResume[index].approved = status
    }
}
export const actions = {
    
}
export const getters = {
    
}