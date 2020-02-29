<template>
  <div>
    <div v-if="loading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <MovieGrid :movies="movies" :loading="loading" />
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
import MovieGrid from "../../components/movies/MovieGrid";
import { mapActions } from "vuex";

export default {
  name: "NowPlaying",
  components: {
    MovieGrid
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
    this.setTitle("Now Playing");
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    getMovies() {
      this.loading = true;
      HTTP.get("movie/now_playing", {
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