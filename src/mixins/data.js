import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import { HTTP } from "../plugins/axios";

export const dataMixins = {
    created() {
        this.setTitle(this.componentName);

        if (this.searchFromNav && (this.data.length === 0 || this.source !== this.componentName)) {
            this.setData([])
            if (this.$route.params.searchWord) {
                this.setSearchInfo(this.$route.params.searchWord)
            }
            this.setSource(this.componentName);
            this.setCurrentPage(1);
            this.getData()
            return
        }

        if (this.data.length === 0 || this.source !== this.componentName) {
            this.setData([])
            this.setSearchInfo("")
            this.setSource(this.componentName);
            this.setCurrentPage(1);
            if (!this.search) {
                this.getData();
            }
            return
        }
    },
    watch: {
        '$route.params.searchWord': function () {
            this.setData([])
            if (this.$route.params.searchWord) {
                this.setSearchInfo(this.$route.params.searchWord)
            }
            this.setSource(this.componentName);
            this.setCurrentPage(1);
            this.getData()
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
        getData() {
            this.setIsLoading(true);
            HTTP.get(this.url, {
                params: { page: this.currentPage, query: this.searchInfo === "" ? " " : this.searchInfo }
            }).then(
                res => {
                    if (res.data.results.length === 0) {
                        this.isAlert = true
                    }
                    this.setData(res.data.results);
                    this.setTotalPages(res.data.total_pages);
                    this.setIsLoading(false);
                }
            );
        },
        changePage(event) {
            this.setCurrentPage(event);
            this.getData();
            window.scrollTo(0, 0);
        }
    }
}