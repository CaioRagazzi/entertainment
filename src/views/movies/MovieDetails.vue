<template>
  <v-container class="container-details">
    <v-card v-if="!isLoading">
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
    <v-container v-else class="d-flex justify-center">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </v-container>
  </v-container>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import AboutDetails from "../../components/movieDetails/AboutDetails";
import RelatedVideosDetails from "../../components/movieDetails/RelatedVideosDetails";
import CastDetails from "../../components/movieDetails/CastDetails";
import SimilarDetails from "../../components/movieDetails/SimilarDetails";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "MovieDetails",
  components: {
    AboutDetails,
    RelatedVideosDetails,
    CastDetails,
    SimilarDetails
  },
  created() {
    this.getConfiguration();
  },
  data() {
    return {
      CurrentTab: 0,
      movie: {},
      isLoading: true
    };
  },
  computed: {
    ...mapGetters({
      configuration: "configuration/configuration"
    }),
    getIdParam: function() {
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapMutations({
      updateConfiguration: "configuration/getConfiguration"
    }),
    getConfiguration() {
      this.isLoading = true;
      HTTP.get("configuration").then(res => {
        this.updateConfiguration(res.data);
        this.isLoading = false;
      });
    }
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
  max-width: 90%;
}
</style>