<template>
  <div class="d-flex flex-wrap justify-center pt-3">
    <TVGrid :tvs="seasons" :loading="isSeasonsLoading" type="season" />
  </div>
</template>

<script>
import TVGrid from "../TVGrid";
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
    TVGrid
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