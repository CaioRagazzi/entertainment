<template>
  <div class="d-flex flex-wrap justify-center pt-3">
    <Grid :data="seasons" :loading="isSeasonsLoading" type="season" />
    <ModalGrid v-if="getShowModal" :url="url" type="episode" />
  </div>
</template>

<script>
import Grid from "../../grid/Grid";
import { HTTP } from "../../../plugins/axios";
import ModalGrid from "../../modal/ModalGrid";
import { mapGetters } from "vuex";

export default {
  name: "Seasons",
  components: {
    Grid,
    ModalGrid
  },
  props: ["id"],
  data() {
    return {
      isSeasonsLoading: true,
      seasons: []
    };
  },
  computed: {
    ...mapGetters({
      getSeasonNumber: "episodes/getSeasonNumber",
      getShowModal: "episodes/getShowModal"
    }),
    url: function() {
      return `/tv/${this.id}/season/${this.getSeasonNumber}`;
    }
  },
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