<template>
  <div>
    <div v-if="loading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <Grid :data="movies" :loading="loading" type="movie" />
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
  name: "TopRated",
  components: {
    Grid
  },
  data() {
    return {
      movies: [],
      currentPage: 1,
      totalPages: 0,
      loading: true
    };
  },
  created() {
    this.getMovies();
    this.setTitle("Top Rated");
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    getMovies() {
      this.loading = true;
      HTTP.get("movie/top_rated", {
        params: { page: this.currentPage }
      }).then(res => {
        this.movies = res.data.results;
        this.totalPages = res.data.total_pages;
        this.loading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getMovies();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>