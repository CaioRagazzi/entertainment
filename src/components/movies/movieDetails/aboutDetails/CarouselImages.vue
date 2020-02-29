<template>
  <v-container>
    <v-container v-if="loadingConfig" class="d-flex justify-center align-center">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </v-container>
    <v-container fluid v-else>
      <v-container>
        <div class="d-flex justify-center align-center" v-if="isImageLoading">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>

        <v-carousel
          :interval="3000"
          vertical
          hide-delimiter-background
          hide-delimiters
          dark
          height="50vh"
        >
          <v-carousel-item
            v-for="image in images"
            :key="image.id"
            :src="getImageURL(image.file_path)"
            reverse-transition="fade-transition"
            transition="fade-transition"
            contain
          ></v-carousel-item>
        </v-carousel>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { configurationMixins } from "../../../../mixins/configuration";
import { HTTP } from "../../../../plugins/axios";

export default {
  name: "CarouselImages",
  props: ["id"],
  data() {
    return {
      images: [],
      isImageLoading: true,
      windowWidth: 0
    };
  },
  mixins: [configurationMixins],
  created() {
    this.getImages();
    this.windowWidth = window.innerWidth;
  },
  methods: {
    getImageURL(image) {
      return (
        this.configuration.images.secure_base_url +
        this.configuration.images.poster_sizes[6] +
        image
      );
    },
    getImages() {
      this.isImageLoading = true;
      HTTP.get(`movie/${this.id}/images`).then(res => {
        this.images = res.data.backdrops;
        this.isImageLoading = false;
      });
    },
    cleanFields() {
      this.images = [];
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getImages();
    }
  }
};
</script>

<style scoped>
</style>