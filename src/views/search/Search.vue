<template>
  <div>
    <div v-if="isLoading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <Grid :data="data" :loading="isLoading" type="cast" />
      <div>
        <v-pagination
          :length="totalPages"
          v-model="currentPage"
          :total-visible="8"
          @input="changePage"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import Grid from "../../components/grid/Grid";
import { mapActions } from "vuex";

export default {
  name: "SearchAll",
  components: {
    Grid
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      totalPages: 0,
      isLoading: true,
      searchWord: ""
    };
  },
  created() {
    this.searchWord = this.$route.params.searchWord;
    this.setTitle(`Searching ${this.searchWord}`);
    this.search();
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    search() {
      this.isLoading = true;
      HTTP.get("search/multi", { params: { query: this.searchWord, page: this.currentPage  } }).then(
        res => {
          this.data = res.data.results;
          this.totalPages = res.data.total_pages;
          this.isLoading = false;
        }
      );
    },
    changePage(event) {
      this.currentPage = event;
      this.search();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>