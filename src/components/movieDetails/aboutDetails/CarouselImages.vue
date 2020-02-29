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
        <div class="container-carousel">

          <v-carousel :height="windowWidth < 600 ? '14vh' :  '50vh'" class="container-carousel" hide-delimiter-background hide-delimiters>
            <v-carousel-item
              v-for="image in images"
              :key="image.id"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-img height="100%" width="100%" :src="getImageURL(image.file_path)" contain></v-img>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { configurationMixins } from "../../../mixins/configuration";
import { HTTP } from "../../../plugins/axios";

export default {
  name: "CarouselImages",
  props: ["id"],
  data() {
    return {
      images: [],
      isImageLoading: true,
      windowWidth: 0,
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
.container-carousel {
  height: 43vh;
}
@media screen and (max-width: 600px) and (min-width: 100px) {
  .container-carousel {
    width: 50vw;
    height: 10vh;
  }
}
@media screen and (max-width: 1000px) and (min-width: 600px) {
  .container-carousel {
    width: 20vw;
    height: 40vh;
  }
}
@media screen and (max-width: 1200px) and (min-width: 1000px) {
  .container-carousel {
    width: 20vw;
    height: 50vh;
  }
}
</style>