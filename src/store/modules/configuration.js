import { HTTP } from "../../plugins/axios";

const state = {
    configuration: {},
    isLoading: true,
}

const getters = {
    isLoading: state => {
        return state.isLoading;
    },
    configuration: state => {
        return state.configuration;
    },
    getImagePosterURL: state => {
        return (
            state.configuration.images.secure_base_url +
            state.configuration.images.poster_sizes[4]
        );
    },
    getImageBackdropURL: state => {
        return (
            state.configuration.images.secure_base_url +
            state.configuration.images.backdrop_sizes[2]
        );
    },
    getImageProfileURL: state => {
        return (
            state.configuration.images.secure_base_url +
            state.configuration.images.profile_sizes[3]
        );
    }
}

const mutations = {
    getConfiguration(state, configuration) {
        state.configuration = configuration;
    },
    setLoading(state, value) {
        state.isLoading = value;
    }
}

const actions = {
    async getConfiguration({ commit }) {
        commit('setLoading', true)
        await HTTP.get("configuration").then(res => {
            commit('getConfiguration', res.data)
            commit('setLoading', false)
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