<template>
  <div>
    <div v-if="isPopularCastloading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <Grid :data="casts" :loading="isPopularCastloading" type="cast" />
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
import { HTTP } from "../../plugins/axios";
import Grid from "../../components/grid/Grid";
import { mapActions } from "vuex";

export default {
  name: "Po",
  components: {
    Grid
  },
  data() {
    return {
      casts: [],
      currentPage: 1,
      totalPages: 0,
      isPopularCastloading: true
    };
  },
  created() {
    this.setTitle("Popular Casts");
    this.getCasts();
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    getCasts() {
      this.isPopularCastloading = true;
      HTTP.get("person/popular", { params: { page: this.currentPage } }).then(
        res => {
          this.casts = res.data.results;
          this.totalPages = res.data.total_pages;
          this.isPopularCastloading = false;
        }
      );
    },
    changePage(event) {
      this.currentPage = event;
      this.getCasts();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>