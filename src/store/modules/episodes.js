const state = {
    tvId: 0,
    seasonNumber: 0,
    episodeNumber: 0,
    showModal: false
}

const getters = {
    getTvId: state => {
        return state.tvId
    },
    getSeasonNumber: state => {
        return state.seasonNumber
    },
    getEpisodeNumber: state => {
        return state.episodeNumber
    },
    getShowModal: state => {
        return state.showModal
    }
}

const mutations = {
    setTvId(state, tvId) {
        state.tvId = tvId;
    },
    setSeasonNumber(state, seasonNumber) {
        state.seasonNumber = seasonNumber;
    },
    setEpisodeNumber(state, episodeNumber) {
        state.episodeNumber = episodeNumber;
    },
    setShowModal(state, showModal) {
        state.showModal = showModal;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}