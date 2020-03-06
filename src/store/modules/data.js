const state = {
    data: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: true,
    source: "",
    searchInfo: "",
}

const getters = {
    getData: state => {
        return state.data
    },
    getCurrentPage: state => {
        return state.currentPage
    },
    getTotalPages: state => {
        return state.totalPages
    },
    getIsLoading: state => {
        return state.isLoading
    },
    getSource: state => {
        return state.source
    },
    getSearchInfo: state => {
        return state.searchInfo
    },
}

const mutations = {
    setData(state, data) {
        state.data = data;
    },
    setCurrentPage(state, currentPage) {
        state.currentPage = currentPage;
    },
    setTotalPages(state, totalPages) {
        state.totalPages = totalPages;
    },
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setSource(state, source) {
        state.source = source;
    },
    setSearchInfo(state, searchInfo) {
        state.searchInfo = searchInfo;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}