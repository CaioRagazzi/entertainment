<template>
  <div>
    <h1 v-for="movie in movies" :key="movie.id"> {{ movie.title }} </h1>
  </div>
</template>

<script>
import { HTTP } from "../plugins/axios";

export default {
  name: "Home",
  data(){
    return{
      movies: []
    }
  },
  created() {
    HTTP.get("upcoming").then(res => {
      this.movies = res.data.results
      console.log(res.data.results);
    });
  }
};
</script>

<style>
</style>