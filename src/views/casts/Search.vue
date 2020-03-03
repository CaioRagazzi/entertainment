<template>
  <v-container>
    <v-text-field label="Movie" v-model="searchInfo" outlined></v-text-field>
    <v-btn color="info" @click="search">Search</v-btn>
    <div class="pt-3">
      <div v-if="isLoading" class="d-flex justify-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <Grid v-else :data="movies" :loading="isLoading" type="cast" />
      <v-snackbar v-model="isAlert" top right color="warning">
        <b class="black--text">Your search returned zero results</b>
        <v-btn color="black" text @click="isAlert = false">Close</v-btn>
      </v-snackbar>
      <div>
        <v-pagination
          v-if="movies.length > 0"
          :length="totalPages"
          v-model="currentPage"
          :total-visible="8"
          @input="changePage"
        ></v-pagination>
      </div>
    </div>
  </v-container>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import Grid from "../../components/grid/Grid";
import { mapActions } from "vuex";

export default {
  name: "SearchTV",
  components: {
    Grid
  },
  created() {
    this.setTitle("Search Person");
  },
  data() {
    return {
      searchInfo: "",
      isLoading: false,
      movies: [],
      totalPages: 0,
      currentPage: 1,
      totalResults: undefined,
      isAlert: false
    };
  },
  watch: {
    totalResults: function(newVal) {
      if (newVal === 0) {
        this.isAlert = true;
      }
    }
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    search() {
      this.isLoading = true;
      HTTP.get("/search/person", {
        params: { page: this.currentPage, query: this.searchInfo }
      }).then(res => {
        this.movies = res.data.results;
        this.totalPages = res.data.total_pages;
        this.totalResults = res.data.total_results;
        this.isLoading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.search();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>