<template>
  <div>
    <div v-if="isLoading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <Grid :data="data" :loading="isLoading" type="tv" />
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
  name: "TVOnTheAir",
  components: {
    Grid
  },
  mixins: [dataMixins],
  data() {
    return {
      url: "tv/on_the_air",
      componentName: "On The Air"
    };
  }
};
</script>

<style>
</style>