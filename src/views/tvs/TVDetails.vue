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
          <v-icon left>mdi-filmstrip</v-icon>Seasons
        </v-tab>
        <v-tab-item>
          <AboutDetails :id="getIdParam" />
        </v-tab-item>
        <v-tab-item>
          <Seasons :id="getIdParam" />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import AboutDetails from "../../components/tvs/aboutDetails/AboutDetails";
import Seasons from "../../components/tvs/aboutDetails/Seasons";
import { mapMutations } from "vuex";

export default {
  name: "TVDetails",
  components: {
    AboutDetails,
    Seasons
  },
  created() {
    this.setTvId(this.$route.params.id);
  },
  data() {
    return {
      CurrentTab: 0,
      movie: {}
    };
  },
  computed: {
    getIdParam: function() {
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapMutations({
      setTvId: "episodes/setTvId"
    }),
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>