<template>
  <v-container>
    <v-text-field label="Movie" v-model="searchInfo" outlined></v-text-field>
    <v-btn color="info" @click="search">Search</v-btn>
    <div class="pt-3">
      <Grid :data="movies" :loading="isLoading" type="movie" />
      <div>
        <v-pagination
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
  name: "SearchMovie",
  components: {
    Grid
  },
  created() {
    this.setTitle("Search");
  },
  data() {
    return {
      searchInfo: "",
      isLoading: false,
      movies: [],
      totalPages: 0,
      currentPage: 1
    };
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    search() {
      this.loading = true;
      HTTP.get("search/movie", {
        params: { page: this.currentPage, query: this.searchInfo }
      }).then(res => {
        this.movies = res.data.results;
        this.totalPages = res.data.total_pages;
        this.loading = false;
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