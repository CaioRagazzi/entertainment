<template>
  <div v-if="!loading">
    <v-row>
      <v-col cols="12" sm="5">
        <v-img v-if="!loading" max-height="100%" max-width="100%" :src="getImageURL()" contain></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="text-sm">
          <b>Overview:</b>
          {{ movie.overview }}
        </p>
        <p>
          <b>Budget:</b>
          ${{ movie.budget }}
        </p>
        <p v-if="movie.homepage !== '' ">
          <b>Home Page:</b>
          {{ movie.homepage }}
        </p>
        <p>
          <b>Adult:</b>
          {{ movie.adult ? "Yes" : "No" }}
        </p>
        <p>
          <b>Original Language:</b>
          {{ movie.original_language }}
        </p>
        <p>
          <b>Original Title:</b>
          {{ movie.original_title }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import { mapActions } from "vuex";

export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {},
      baseUrl: "",
      backDropSizes: [],
      loading: false
    };
  },
  async created() {
    this.loading = true;
    await HTTP.get(`movie/${this.$route.params.id}`).then(res => {
      console.log(res.data);
      this.movie = res.data;
      this.setTitle(res.data.title)
    });

    await HTTP.get("configuration").then(res => {
      this.backDropSizes = res.data.images.backdrop_sizes;
      this.baseUrl = res.data.images.base_url;
    });
    this.loading = false;
  },
  methods: {
    getImageURL() {
      return `${this.baseUrl +
        this.backDropSizes[3] +
        this.movie.backdrop_path}`;
    },
    ...mapActions({
      setTitle: "navBar/setTitle"
    })
  }
};
</script>

<style scoped>
</style>