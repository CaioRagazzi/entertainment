<template>
  <v-container>
    <v-text-field label="Movie" :value="searchInfo" @input="setSearchInfo" outlined></v-text-field>
    <v-btn color="info" @click="getData">Search</v-btn>
    <div class="pt-3">
      <div v-if="isLoading" class="d-flex justify-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <Grid v-else :data="data" :loading="isLoading" type="tv" />
      <v-snackbar v-model="isAlert" top right color="warning">
        <b class="black--text">Your search returned zero results</b>
        <v-btn color="black" text @click="isAlert = false">Close</v-btn>
      </v-snackbar>
      <div>
        <v-pagination
          v-if="data.length > 0"
          :length="totalPages"
          :value="currentPage"
          :total-visible="8"
          @input="changePage"
        ></v-pagination>
      </div>
    </div>
  </v-container>
</template>

<script>
import Grid from "../../components/grid/Grid";
import { dataMixins } from "../../mixins/data";

export default {
  name: "SearchTvShows",
  components: {
    Grid
  },
  mixins: [dataMixins],
  data() {
    return {
      url: "search/tv",
      componentName: "Search TV Shows",
      isAlert: false,
      search: true
    };
  },
};
</script>

<style>
</style>