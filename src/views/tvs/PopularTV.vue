<template>
  <div>
    <div v-if="loading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <Grid :data="tvs" :loading="loading" type="tv" />
      <div>
        <v-pagination
          :length="totalPages"
          v-model="currentPage"
          :total-visible="8"
          @input="changePage"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { HTTP } from "../../plugins/axios";
import Grid from "../../components/grid/Grid";

export default {
  name: "PopularTV",
  components: {
    Grid
  },
  created() {
    this.getPopular();
    this.setTitle("Popular");
  },
  data() {
    return {
      tvs: [],
      currentPage: 1,
      totalPages: 0,
      loading: true
    };
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    getPopular() {
      this.loading = true;
      HTTP.get("tv/popular", {
        params: { page: this.currentPage }
      }).then(res => {
        this.totalPages = res.data.total_pages;
        this.tvs = res.data.results;
        this.loading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getPopular();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>