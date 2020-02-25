<template>
  <v-container>
    <MovieGrid :movies="similarMovies" />
    <div>
      <v-pagination
        :length="totalPages"
        v-model="currentPage"
        :total-visible="8"
        @input="changePage"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import MovieGrid from "../../components/movies/MovieGrid";
import { HTTP } from "../../plugins/axios";

export default {
  name: "SimilarMovies",
  props: ["movie"],
  components: {
    MovieGrid
  },
  data() {
    return {
      similarMovies: [],
      totalPages: 0,
      currentPage: 1
    };
  },
  created() {
    this.getSimilarMovies();
  },
  methods: {
    getSimilarMovies() {
      HTTP.get(`movie/${this.movie.id}/similar`, {
        params: { page: this.currentPage }
      }).then(res => {
        this.totalPages = res.data.total_pages;
        this.similarMovies = res.data.results;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getSimilarMovies();
    }
  }
};
</script>

<style>
</style>