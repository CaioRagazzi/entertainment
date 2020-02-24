import { HTTP } from "../../plugins/axios";

const state = {
    configuration: undefined,
}

const getters = {
    configuration: state => {
        return state.configuration
    },
    getImagePosterURL: state => {
        return (
            state.configuration.images.base_url +
            state.configuration.images.poster_sizes[4]
        );
    }
}

const mutations = {
    getConfiguration(state, configuration) {
        state.configuration = configuration;
    }
}

const actions = {
    async getConfiguration({ commit }) {
        await HTTP.get("configuration").then(res => {
            commit('getConfiguration', res.data)
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}