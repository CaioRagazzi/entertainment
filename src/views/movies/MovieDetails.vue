<template>
  <v-container class="container-details">
    <v-card>
      <v-tabs>
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
          <v-icon left>mdi-domain</v-icon>Crew
        </v-tab>
        <v-tab-item>
          <AboutDetails :movie="movie" />
        </v-tab-item>
        <v-tab-item>
          <RelatedVideosDetails :movie="movie" />
        </v-tab-item>
        <v-tab-item>
          <CastDetails :movie="movie" />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import { mapActions } from "vuex";
import AboutDetails from "../../components/movieDetails/AboutDetails";
import RelatedVideosDetails from "../../components/movieDetails/RelatedVideosDetails";
import CastDetails from "../../components/movieDetails/CastDetails";

export default {
  name: "MovieDetails",
  components: {
    AboutDetails,
    RelatedVideosDetails,
    CastDetails
  },
  data() {
    return {
      movie: {},
    };
  },
  created() {
      this.getMovie();
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle",
    }),
    getMovie() {
      HTTP.get(`movie/${this.$route.params.id}`).then(res => {
        this.movie = res.data;
        this.setTitle(res.data.title);
      });
    },
  }
};
</script>

<style scoped>
.container-details {
  max-width: 90%;
}
</style>