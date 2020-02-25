<template>
  <v-container>
    <v-progress-circular v-if="isSimilarLoading" :size="50" color="primary" indeterminate></v-progress-circular>
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
  </v-container>
</template>

<script>
import MovieGrid from "../../components/movies/MovieGrid";
import { HTTP } from "../../plugins/axios";

export default {
  name: "SimilarMovies",
  components: {
    MovieGrid
  },
  props: ["id"],
  data() {
    return {
      similarMovies: [],
      totalPages: 0,
      currentPage: 1,
      isSimilarLoading: true
    };
  },
  created() {
    this.getSimilarMovies();
  },
  methods: {
    getSimilarMovies() {
      this.isSimilarLoading = true;
      HTTP.get(`movie/${this.id}/similar`, {
        params: { page: this.currentPage }
      }).then(res => {
        this.totalPages = res.data.total_pages;
        this.similarMovies = res.data.results;
        this.isSimilarLoading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getSimilarMovies();
    },
    cleanFields(){
      this.similarMovies = []
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getSimilarMovies();
    }
  }
};
</script>

<style>
</style>