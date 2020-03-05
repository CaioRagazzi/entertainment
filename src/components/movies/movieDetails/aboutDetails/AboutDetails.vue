<template>
  <v-container fluid>
    <CarouselImages :id="id" />
    <MovieInfo :movieId="id" />
  </v-container>
</template>

<script>
import { HTTP } from "../../../../plugins/axios";
import { mapMutations } from "vuex";
import CarouselImages from "./CarouselImages";
import MovieInfo from "./MovieInfo";

export default {
  name: "AboutDetails",
  components: {
    CarouselImages,
    MovieInfo
  },
  props: ["id"],
  updated(){
    this.setTitle();
  },
  mounted() {
    this.setTitle();
  },
  methods: {
    ...mapMutations({
      setTitleNav: "navBar/setTitle"
    }),
    setTitle() {
      HTTP.get(`movie/${this.id}`).then(res => {
        this.setTitleNav(res.data.title);
      });
    }
  }
};
</script>

<style>
</style>