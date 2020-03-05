const state = {
    title: '',
}

const getters = {
    title: state => {
        return state.title
    }
}

const mutations = {
    setTitle(state, title) {
        state.title = title;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}