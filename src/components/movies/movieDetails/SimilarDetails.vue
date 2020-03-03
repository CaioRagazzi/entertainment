<template>
  <v-container>
    <v-container class="d-flex justify-center align-center" v-if="isSimilarLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <v-container v-else>
      <Grid :data="similarMovies" :loading="isSimilarLoading" type="movie" />
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
import Grid from "../../../components/grid/Grid";
import { HTTP } from "../../../plugins/axios";

export default {
  name: "SimilarMovies",
  components: {
    Grid
  },
  props: ["id"],
  data() {
    return {
      similarMovies: [],
      totalPages: 0,
      currentPage: 1,
      isSimilarLoading: true
    };
  },
  created() {
    this.getSimilarMovies();
  },
  methods: {
    getSimilarMovies() {
      this.isSimilarLoading = true;
      HTTP.get(`movie/${this.id}/similar`, {
        params: { page: this.currentPage }
      }).then(res => {
        this.totalPages = res.data.total_pages;
        this.similarMovies = res.data.results;
        this.isSimilarLoading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getSimilarMovies();
    },
    cleanFields(){
      this.similarMovies = []
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getSimilarMovies();
    }
  }
};
</script>

<style>
</style>