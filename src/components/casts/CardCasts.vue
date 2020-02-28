<template>
  <div>
    <v-container class="d-flex justify-center align-center" v-if="loadingConfig">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <v-card :loading="loading || image == null" @click="goToDetails" hover class="mb-5 mr-5 card">
      <v-skeleton-loader
        v-if="image === null || image === undefined"
        height="100%"
        width="100%"
        type="card"
      ></v-skeleton-loader>
      <v-img
        v-else
        height="100%"
        width="100%"
        class="my-img"
        :src="getImagePosterURL(image)"
        contain
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <div class="text-img">
            <v-col>
              <div class="subheading"> {{ castName }} </div>
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
  name: "CastCard",
  mixins: [configurationMixins],
  props: ["image", "id", "loading", "castName"],
  data() {
    return {
      loadingConfig: true
    };
  },
  methods: {
    goToDetails() {
      this.$router.push({ name: "CastDetails", params: { id: this.id } });
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

<style scoped>
.text-img {
  background-color: black;
}
</style>