const state = {
    show: false,
}

const getters = {
    isShow: state => {
        return state.show
    }
}

const mutations = {
    toggleSideBar(state) {
        state.show = !state.show;
    }
}

const actions = {
    toggleSideBar({ commit }) {
        commit('toggleSideBar')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}