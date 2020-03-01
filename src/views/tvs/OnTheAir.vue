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
  name: "OnTheAir",
  components: {
    TVGrid
  },
  created() {
    this.getOnTheAir();
    this.setTitle("On the air");
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
    getOnTheAir() {
      this.loading = true;
      HTTP.get("tv/on_the_air", {
        params: { page: this.currentPage }
      }).then(res => {
        this.totalPages = res.data.total_pages;
        this.tvs = res.data.results;
        this.loading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getOnTheAir();
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>