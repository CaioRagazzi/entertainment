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
  </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  name: "Upcoming",
  props: ["movies", "loading"],
  components: {
    MovieCard
  },
};
</script>

<style scoped>
</style>