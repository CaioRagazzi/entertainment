<template>
  <div>
    <v-skeleton-loader v-if="loading" type="image" />
    <v-img v-else :src="getImageURL()"></v-img>
  </div>
</template>

<script>
import { HTTP } from "../../plugins/axios";

export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {},
      baseUrl: "",
      backDropSizes: [],
      loading: false
    };
  },
  async created() {
    this.loading = true;
    await HTTP.get(`movie/${this.$route.params.id}`).then(res => {
      this.movie = res.data;
    });

    await HTTP.get("configuration").then(res => {
      this.backDropSizes = res.data.images.backdrop_sizes;
      this.baseUrl = res.data.images.base_url;
    });
    this.loading = false;
  },
  methods: {
    getImageURL() {
      return `${this.baseUrl +
        this.backDropSizes[3] +
        this.movie.backdrop_path}`;
    }
  }
};
</script>

<style>
</style>