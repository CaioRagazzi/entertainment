<template>
  <div>
    <v-container class="d-flex justify-center align-center" v-if="loadingConfig">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <v-card
      :loading="loading || image == null"
      @click="goToDetails"
      hover
      class="mb-5 mr-5 my-card"
    >
      <div v-if="image === null || image === undefined">
        <h5>Image not avaiable</h5>
      </div>
      <v-img v-else height="100%" width="100%" :src="getImage(image)">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <div class="text-img">
            <v-col>
              <div class="subheading">{{ title }}</div>
            </v-col>
          </div>
        </v-row>
      </v-img>
    </v-card>
  </div>
</template>

<script>
import { configurationMixins } from "../../mixins/configuration";

export default {
  name: "Card",
  mixins: [configurationMixins],
  props: ["image", "id", "loading", "title", "type"],
  data() {
    return {
      loadingConfig: true
    };
  },
  methods: {
    goToDetails() {
      if (this.type === "movie") {
        this.$router.push({ name: "MovieDetails", params: { id: this.id } });
        return;
      }
      if (this.type === "cast" || this.type === "person") {
        this.$router.push({ name: "CastDetails", params: { id: this.id } });
        return;
      }
      if (this.type === "tv") {
        this.$router.push({ name: "TVDetails", params: { id: this.id } });
        return;
      }
    },
    getImage(image) {
      if (this.configuration === undefined) {
        return;
      }
      if (this.type === "movie") {
        return (
          this.configuration.images.secure_base_url +
          this.configuration.images.poster_sizes[4] +
          image
        );
      }
      if (this.type === "cast" || this.type === "person") {
        return (
          this.configuration.images.secure_base_url +
          this.configuration.images.poster_sizes[4] +
          image
        );
      }
      if (this.type === "tv" || this.type === "season") {
        return (
          this.configuration.images.secure_base_url +
          this.configuration.images.poster_sizes[4] +
          image
        );
      }
    }
  }
};
</script>

<style scoped>
.text-img {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0% 25px 25px 0%;
}
.my-card {
  width: 15vw;
  height: 45vh;
}
@media screen and (max-width: 600px) and (min-width: 100px) {
  .my-card {
    width: 75vw;
    height: 55vh;
  }
}
@media screen and (max-width: 1000px) and (min-width: 600px) {
  .my-card {
    width: 35vw;
    height: 35vh;
  }
}
@media screen and (max-width: 1200px) and (min-width: 1000px) {
  .my-card {
    width: 35vw;
    height: 35vh;
  }
}
</style>