<template>
    <div class="d-flex flex-wrap justify-center">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :image="movie.poster_path"
        :loading="loading"
        :title="movie.title"
      />
    </div>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  name: "MovieGrid",
  props: ["movies", "loading"],
  components: {
    MovieCard
  },
};
</script>

<style scoped>
</style>