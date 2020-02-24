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

const actions = {
    setTitle({ commit }, title) {
        commit('setTitle', title)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}