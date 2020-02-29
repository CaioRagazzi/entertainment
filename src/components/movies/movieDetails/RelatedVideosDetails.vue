<template>
  <v-container class="d-flex flex-wrap justify-center">
    <v-progress-circular v-if="isVideoLoading" :size="50" color="primary" indeterminate></v-progress-circular>
    <iframe
      class="pl-2 pt-2"
      v-for="video in relatedVideos"
      :key="video.id"
      frameborder="0"
      :src="`https://www.youtube.com/embed/${video.key}`"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </v-container>
</template>

<script>
import { HTTP } from "../../../plugins/axios";

export default {
  name: "RelatedVideosDetails",
  props: ["id"],
  data() {
    return {
      relatedVideos: [],
      isVideoLoading: true
    };
  },
  created() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      this.isVideoLoading = true;
      HTTP.get(`movie/${this.id}/videos`).then(res => {
        this.relatedVideos = res.data.results;
        this.isVideoLoading = false;
      });
    },
    cleanFields(){
      this.relatedVideos = []
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getVideos();
    }
  }
};
</script>

<style scoped>
iframe {
  width: 25vw;
  height: 30ch;
}
@media screen and (max-width: 600px) and (min-width: 100px) {
  iframe {
    width: 100%;
    height: 30%;
  }
}
</style>