<template>
  <div>
    <div v-if="loading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <TVGrid :tvs="tvs" :loading="loading" />
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
import TVGrid from "../../components/tvs/TVGrid";

export default {
  name: "AiringTodays",
  components: {
    TVGrid
  },
  created() {
    this.getAiringToday();
    this.setTitle("AiringToday");
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
    getAiringToday() {
      this.loading = true;
      HTTP.get("tv/airing_today", {
        params: { page: this.currentPage }
      }).then(res => {
        console.log(res.data.results);
        this.totalPages = res.data.total_pages;
        this.tvs = res.data.results;
        this.loading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getAiringToday();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>