<template>
  <div>
    <div class="d-flex flex-wrap justify-center">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :image="movie.poster_path"
        :loading="loading"
      />
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
      totalPages: 0,
      loading: true
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.loading = true;
      HTTP.get("movie/upcoming", { params: { page: this.currentPage } }).then(
        res => {
          this.movies = res.data.results;
          this.totalPages = res.data.total_pages;
          this.loading = false;
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