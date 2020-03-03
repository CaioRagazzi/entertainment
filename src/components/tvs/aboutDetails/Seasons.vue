<template>
  <div class="d-flex flex-wrap justify-center pt-3">
    <Grid :data="seasons" :loading="isSeasonsLoading" type="season" />
  </div>
</template>

<script>
import Grid from "../../grid/Grid";
import { HTTP } from "../../../plugins/axios";

export default {
  name: "Seasons",
  data() {
    return {
      isSeasonsLoading: true,
      seasons: []
    };
  },
  components: {
    Grid
  },
  props: ["id"],
  created() {
    this.getSeasons();
  },
  methods: {
    getSeasons() {
      this.isSeasonsLoading = true;
      HTTP.get(`tv/${this.id}`).then(res => {
        this.seasons = res.data.seasons;
        this.isSeasonsLoading = false;
      });
    }
  }
};
</script>

<style>
</style>