<template>
  <div>
    <div v-if="loading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <CastGrid :casts="casts" :loading="loading" />
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
import CastGrid from "../../components/casts/CastGrid";
import { mapActions } from "vuex";

export default {
  name: "Po",
  components: {
    CastGrid
  },
  data() {
    return {
      casts: [],
      currentPage: 1,
      totalPages: 0,
      loading: true
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
      this.loading = true;
      HTTP.get("person/popular", { params: { page: this.currentPage } }).then(
        res => {
          this.casts = res.data.results;
          this.totalPages = res.data.total_pages;
          this.loading = false;
        }
      );
    },
    changePage(event) {
      this.currentPage = event;
      this.getCasts();
    }
  }
};
</script>

<style>
</style>