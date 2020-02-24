<template>
  <div>
    <div class="d-flex flex-wrap justify-center">
      <!-- <v-col cols="12" class="h-100"> -->
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :image="baseUrl + poster_sizes[4] + movie.poster_path"
      />
      <!-- </v-col> -->
    </div>
    <div>
      <v-pagination
        :length="totalPages"
        v-model="currentPage"
        :total-visible="8"
        @input="changePage"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../../plugins/axios";
import MovieCard from "../card/MovieCard";

export default {
  name: "Upcoming",
  components: {
    MovieCard
  },
  data() {
    return {
      movies: [],
      baseUrl: "",
      poster_sizes: [],
      currentPage: 1,
      totalPages: 0
    };
  },
  created() {
    this.getMovies();
    HTTP.get("configuration").then(res => {
      this.poster_sizes = res.data.images.logo_sizes;
      this.baseUrl = res.data.images.base_url;
    });
  },
  methods: {
    getMovies() {
      HTTP.get("movie/upcoming", { params: { page: this.currentPage } }).then(
        res => {
          this.movies = res.data.results;
          this.totalPages = res.data.total_pages;
          console.log(res.data);
        }
      );
    },
    changePage(event) {
      this.currentPage = event;
      this.getMovies();
    }
  }
};
</script>

<style scoped>
</style>