<template>
  <v-container class="container-details" fluid>
    <v-btn @click="goBack()" class="mb-2" color="white">
      <v-icon left>mdi-arrow-left</v-icon>Back
    </v-btn>
    <v-card>
      <v-tabs v-model="CurrentTab">
        <v-tab>
          <v-icon left>mdi-filmstrip</v-icon>About
        </v-tab>
        <v-tab>
          <v-icon left>mdi-library-video</v-icon>Related Videos
        </v-tab>
        <v-tab>
          <v-icon left>mdi-account-multiple</v-icon>Cast
        </v-tab>
        <v-tab>
          <v-icon left>mdi-domain</v-icon>Similar Movies
        </v-tab>
        <v-tab-item>
          <AboutDetails :id="getIdParam" />
        </v-tab-item>
        <v-tab-item>
          <RelatedVideosDetails :id="getIdParam" />
        </v-tab-item>
        <v-tab-item>
          <CastDetails :id="getIdParam" />
        </v-tab-item>
        <v-tab-item>
          <SimilarDetails :id="getIdParam" />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import AboutDetails from "../../components/movies/movieDetails/aboutDetails/AboutDetails";
import RelatedVideosDetails from "../../components/movies/movieDetails/RelatedVideosDetails";
import CastDetails from "../../components/movies/movieDetails/CastDetails";
import SimilarDetails from "../../components/movies/movieDetails/SimilarDetails";

export default {
  name: "MovieDetails",
  components: {
    AboutDetails,
    RelatedVideosDetails,
    CastDetails,
    SimilarDetails
  },
  data() {
    return {
      CurrentTab: 0,
      movie: {},
    };
  },
  computed: {
    getIdParam: function() {
      return this.$route.params.id;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  watch: {
    $route(to, from) {
      if (to.name === from.name) {
        this.CurrentTab = 0;
      }
    }
  }
};
</script>

<style scoped>
.container-details {
  max-width: 100%;
}
</style>