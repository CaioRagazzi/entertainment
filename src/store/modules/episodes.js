const state = {
    tvId: 0,
    seasonNumber: 0,
    episodeNumber: 0,
    showModal: false,
    seasonImage: "",
    seasonOverview: ""
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
    },
    getSeasonImage: state => {
        return state.seasonImage
    },
    getSeasonOverview: state => {
        return state.seasonOverview
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
    },
    setSeasonImage(state, seasonImage) {
        state.seasonImage = seasonImage
    },
    setSeasonOverview(state, seasonOverview) {
        state.seasonOverview = seasonOverview
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}