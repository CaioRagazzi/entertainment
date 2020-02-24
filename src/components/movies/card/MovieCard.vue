<template>
  <v-card
    :loading="loading || image == null"
    @click="goToDetails"
    hover
    class="mb-5 mr-5 card"
  >
    <div v-if="image === null || image === undefined"></div>
    <v-img v-else height="100%" width="100%" :src="getImagePosterURL + image" contain></v-img>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MovieCard",
  props: ["image", "id", "loading"],
  methods: {
    goToDetails() {
      this.$router.push({ name: "MovieDetails", params: { id: this.id } });
    }
  },
  computed: {
    ...mapGetters({
      configuration: "configuration/configuration",
      getImagePosterURL: "configuration/getImagePosterURL"
    })
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