<template>
  <v-container class="d-flex flex-wrap justify-center">
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
import { HTTP } from "../../plugins/axios";

export default {
  name: "RelatedVideosDetails",
  props: ["movie"],
  data() {
    return {
      relatedVideos: []
    };
  },
  created() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      HTTP.get(`movie/${this.movie.id}/videos`).then(res => {
        this.relatedVideos = res.data.results;
      });
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