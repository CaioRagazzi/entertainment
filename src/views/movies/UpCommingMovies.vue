<template>
  <div>
    <div v-if="isLoading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <Grid :data="data" :loading="isLoading" type="movie" />
      <div>
        <v-pagination
          :length="totalPages"
          :value="currentPage"
          :total-visible="8"
          @input="changePage"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from "../../components/grid/Grid";
import { dataMixins } from "../../mixins/data";

export default {
  name: "UpCommingMovies",
  components: {
    Grid
  },
  mixins: [dataMixins],
  data() {
    return {
      url: "movie/upcoming",
      componentName: "UpCommingMovies"
    };
  },
};
</script>

<style>
</style>