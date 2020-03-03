<template>
  <v-container>
    <v-container class="d-flex justify-center align-center" v-if="isCastMoviesLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <v-container v-else>
      <Grid :data="castMovies" :loading="isCastMoviesLoading" type="movie" />
      <div>
        <v-pagination
          :length="totalPages"
          v-model="currentPage"
          :total-visible="8"
          @input="changePage"
        ></v-pagination>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import Grid from "../../components/grid/Grid";
import { HTTP } from "../../plugins/axios";

export default {
  name: "MoviesCast",
  components: {
    Grid
  },
  props: ["id"],
  data() {
    return {
      castMovies: [],
      totalPages: 0,
      currentPage: 1,
      isCastMoviesLoading: true
    };
  },
  created() {
    this.getCaseMovies();
  },
  methods: {
    getCaseMovies() {
      this.isCastMoviesLoading = true;
      HTTP.get(`person/${this.id}/movie_credits`, {
        params: { page: this.currentPage }
      }).then(res => {
        this.totalPages = res.data.total_pages;
        this.castMovies = res.data.cast;
        this.isCastMoviesLoading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getCaseMovies();
    },
    cleanFields(){
      this.castMovies = []
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getCaseMovies();
    }
  }
};
</script>

<style>
</style>