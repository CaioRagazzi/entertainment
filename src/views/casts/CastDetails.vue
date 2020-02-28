<template>
  <v-container class="container-details">
    <v-btn @click="goBack()" class="mb-2" color="white">
      <v-icon left>mdi-arrow-left</v-icon>Back
    </v-btn>
    <v-card class="mx-auto">
      <v-tabs v-model="CurrentTab">
        <v-tab>
          <v-icon left>mdi-filmstrip</v-icon>About
        </v-tab>
        <v-tab>
          <v-icon left>mdi-filmstrip</v-icon>Movies
        </v-tab>
        <v-tab-item>
          <AboutDetails :id="getIdParam" />
        </v-tab-item>
        <v-tab-item>
          <MoviesCast :id="getIdParam" />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import AboutDetails from "../../components/casts/aboutDetails/AboutDetails";
import MoviesCast from "../../components/casts/MoviesCast";

export default {
  name: "MovieDetails",
  components: {
    AboutDetails,
    MoviesCast
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
  max-width: 90%;
}
</style>