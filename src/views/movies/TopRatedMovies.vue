<template>
  <div>
    <MovieGrid
      :movies="movies"
      :currentPage="currentPage"
      :totalPages="totalPages"
      :loading="loading"
    />
    <div>
      <v-pagination
        :length="totalPages"
        v-model="currentPage"
        :total-visible="8"
        @input="changePage"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import MovieGrid from "../../components/movies/MovieGrid";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "TopRated",
  components: {
    MovieGrid
  },
  data() {
    return {
      movies: [],
      currentPage: 1,
      totalPages: 0,
      loading: true
    };
  },
  created() {
    if (this.configuration.images === undefined) {
      this.getConfiguration().then(() => {
        this.getMovies();
      });
    } else {
      this.getMovies();
    }
    this.setTitle("Top Rated");
  },
  computed: {
    ...mapGetters({
      configuration: "configuration/configuration"
    })
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle",
      getConfiguration: "configuration/getConfiguration"
    }),
    getMovies() {
      this.loading = true;
      HTTP.get("movie/top_rated", {
        params: { page: this.currentPage }
      }).then(res => {
        this.movies = res.data.results;
        this.totalPages = res.data.total_pages;
        this.loading = false;
      });
    },
    changePage(event) {
      this.currentPage = event;
      this.getMovies();
    }
  }
};
</script>

<style>
</style>