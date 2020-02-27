<template>
  <div>
    <v-container class="d-flex justify-center align-center" v-if="loadingConfig">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <v-card :loading="loading || image == null" @click="goToDetails" hover class="mb-5 mr-5 card">
      <v-skeleton-loader v-if="image === null || image === undefined" height="100%" width="100%" type="card"></v-skeleton-loader>
      <v-img v-else height="100%" width="100%" :src="getImagePosterURL(image)" contain></v-img>
    </v-card>
  </div>
</template>

<script>
import { configurationMixins } from "../../mixins/configuration";

export default {
  name: "MovieCard",
  mixins: [configurationMixins],
  props: ["image", "id", "loading"],
  data() {
    return {
      loadingConfig: true
    };
  },
  methods: {
    goToDetails() {
      this.$router.push({ name: "MovieDetails", params: { id: this.id } });
    },
    getImagePosterURL(image) {
      if (this.configuration === undefined) {
        return;
      }
      return (
        this.configuration.images.secure_base_url +
        this.configuration.images.poster_sizes[4] +
        image
      );
    }
  }
};
</script>

<style>
.card {
  width: 15vw;
}
@media screen and (max-width: 600px) and (min-width: 100px) {
  .card {
    width: 75vw;
    height: 70vh;
  }
}
@media screen and (max-width: 1000px) and (min-width: 600px) {
  .card {
    width: 40vw;
    height: 50vh;
  }
}
@media screen and (max-width: 1200px) and (min-width: 1000px) {
  .card {
    width: 30vw;
    height: 50vh;
  }
}
</style>