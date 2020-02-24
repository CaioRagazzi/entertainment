<template>
  <div>
    <div class="d-flex justify-center">
      <v-card :loading="getImageURL === null">
        <div v-if="getImageURL === null"></div>
        <v-img v-else :src="getImageURL"></v-img>
      </v-card>
    </div>
    <v-container class="d-flex flex-wrap justify-center">
      <v-chip
        class="ml-1 mt-1"
        v-for="genre in movie.genres"
        :key="genre.id"
        color="primary"
      >{{ genre.name }}</v-chip>
      <!-- <v-chip
        class="ml-1 mt-1"
        v-for="keyword in keyWords"
        :key="keyword.id"
        color="primary"
      >{{ keyword.name }}</v-chip> -->
    </v-container>
    <p class="text-sm">
      <b>Overview:</b>
      {{ movie.overview }}
    </p>
    <p>
      <b>Budget:</b>
      ${{ movie.budget }}
    </p>
    <p v-if="movie.homepage">
      <b>Home Page:</b>
      <a target="_blank" :href="movie.homepage">{{ movie.homepage }}</a>
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
    <p>
      <b>Release Date:</b>
      {{ movie.release_date }}
    </p>
    <p v-if="movie.tagline">
      <b>Tagline:</b>
      {{ movie.tagline }}
    </p>
  </div>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {},
      baseUrl: "",
      backDropSizes: [],
      isLoading: true,
      keyWords: [],
      window: {
        width: 0
      }
    };
  },
  created() {
    if (this.configuration.images === undefined) {
      this.getConfiguration().then(() => {
        this.getMovie();
      });
    } else {
      this.getMovie();
    }
    this.getKeyWords();
  },
  computed: {
    ...mapGetters({
      getBaseUrlPlusSize: "configuration/getImageBackdropURL",
      configuration: "configuration/configuration",
      isConfigLoading: "configuration/isLoading"
    }),
    getScreenSize: function () {
      return window.innerWidth;
    },
    getImageURL: function() {
      if (
        (this.movie.backdrop_path === null ||
          this.movie.backdrop_path === undefined) &&
        (this.movie.poster_path === null ||
          this.movie.poster_path === undefined)
      ) {
        return null;
      } else if (
        this.movie.backdrop_path === null ||
        this.movie.backdrop_path === undefined
      ) {
        return this.getBaseUrlPlusSize + this.movie.poster_path;
      } else {
        return this.getBaseUrlPlusSize + this.movie.backdrop_path;
      }
    }
  },
  methods: {
    ...mapActions({
      setTitle: "navBar/setTitle",
      getConfiguration: "configuration/getConfiguration"
    }),
    getKeyWords() {
      HTTP.get(`movie/${this.$route.params.id}/keywords`).then(res => {
        this.keyWords = res.data.keywords;
      });
    },
    getMovie() {
      this.isLoading = true;
      HTTP.get(`movie/${this.$route.params.id}`).then(res => {
        console.log(res.data);
        this.movie = res.data;
        this.setTitle(res.data.title);
        this.isLoading = false;
      });
    }
  }
};
</script>

<style scoped>
</style>