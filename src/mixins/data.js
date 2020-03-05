import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import { HTTP } from "../plugins/axios";

export const dataMixins = {
    created() {
        this.setTitle(this.componentName);
        if (this.data.length === 0 || this.source !== this.componentName) {
            this.setSource(this.componentName);
            this.setCurrentPage(1);
            this.getMovies();
        }
    },
    computed: {
        ...mapGetters({
            data: "data/getData",
            isLoading: "data/getIsLoading",
            totalPages: "data/getTotalPages",
            source: "data/getSource",
            searchInfo: "data/getSearchInfo",
            currentPage: "data/getCurrentPage",
        }),
    },
    methods: {
        ...mapMutations({
            setTitle: "navBar/setTitle",
            setData: "data/setData",
            setIsLoading: "data/setIsLoading",
            setTotalPages: "data/setTotalPages",
            setSource: "data/setSource",
            setCurrentPage: "data/setCurrentPage",
            setSearchInfo: "data/setSearchInfo"
        }),
        getMovies() {
            this.setData([])
            this.setIsLoading(true);
            HTTP.get(this.url, {
                params: { page: this.currentPage, query: this.searchInfo }
            }).then(
                res => {
                    this.setData(res.data.results);
                    this.setTotalPages(res.data.total_pages);
                    this.setIsLoading(false);
                }
            );
        },
        changePage(event) {
            this.setCurrentPage(event);
            this.getMovies();
            window.scrollTo(0, 0);
        }
    }
}