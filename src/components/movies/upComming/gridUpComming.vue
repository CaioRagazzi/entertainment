<template>
  <v-container>
    <v-col cols="12">
      <v-row align="center" justify="center" style="height: 300px;" dense>
        <MovieCard v-for="movie in movies" :key="movie.id" :id="movie.id" :image="baseUrl + poster_sizes[4] + movie.poster_path" />
      </v-row>
    </v-col>
  </v-container>
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
      poster_sizes: []
    };
  },
  created() {
    HTTP.get("movie/upcoming").then(res => {
      this.movies = res.data.results;
      console.log(res.data.results);
    });

    HTTP.get("configuration").then(res => {
      this.poster_sizes = res.data.images.logo_sizes;
      this.baseUrl = res.data.images.base_url;
    });
  },
};
</script>

<style scoped>
</style>