<template>
  <v-container>
    <div v-if="loadingConfig" class="d-flex justify-center align-center">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-container v-else>
      <v-container class="pt-3">
        <div class="d-flex justify-center align-center" v-if="isImageLoading">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>

        <v-carousel
          :interval="3000"
          vertical
          hide-delimiter-background
          hide-delimiters
          dark
          height="50vh"
        >
          <v-carousel-item
            v-for="image in images"
            :key="image.id"
            :src="getImageURL(image.file_path)"
            reverse-transition="fade-transition"
            transition="fade-transition"
            contain
          ></v-carousel-item>
        </v-carousel>
      </v-container>

      <div>
        <div v-if="isMovieLoading" class="d-flex justify-center align-center">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
        <v-container v-else>
          <v-container class="d-flex flex-wrap justify-center">
            <v-chip
              class="ml-1 mt-1"
              v-for="genre in movie.genres"
              :key="genre.id"
              color="primary"
            >{{ genre.name }}</v-chip>
          </v-container>
          <v-container>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Overview:</v-list-item-title>
                <v-list-item-subtitle>{{ movie.overview }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" sm="4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Budget:</v-list-item-title>
                    <v-list-item-subtitle>{{ movie.budget }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="4">
                <v-list-item v-if="movie.homepage" two-line>
                  <v-list-item-content>
                    <v-list-item-title>Home Page:</v-list-item-title>
                    <v-list-item-subtitle>
                      <a target="_blank" :href="movie.homepage">{{ movie.homepage }}</a>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Adult:</v-list-item-title>
                    <v-list-item-subtitle>{{ movie.adult ? "Yes" : "No" }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" sm="4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Original Language:</v-list-item-title>
                    <v-list-item-subtitle>{{ movie.original_language }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Original Title:</v-list-item-title>
                    <v-list-item-subtitle>{{ movie.original_title }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="12" sm="4">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Release Date:</v-list-item-title>
                    <v-list-item-subtitle>{{ movie.release_date }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" sm="4">
                <v-list-item v-if="movie.tagline" two-line>
                  <v-list-item-content>
                    <v-list-item-title>Tagline:</v-list-item-title>
                    <v-list-item-subtitle>{{ movie.tagline }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import { mapActions } from "vuex";

export default {
  name: "AboutDetails",
  props: ["id"],
  data() {
    return {
      images: [],
      movie: [],
      isImageLoading: true,
      isMovieLoading: true,
      loadingConfig: true,
      configuration: {}
    };
  },
  async created() {
    this.setConfiguration();
    this.getImages();
    this.getMovie();
  },
  methods: {
    setConfiguration() {
      if (this.hasStorageConfiguration()) {
        this.configuration = JSON.parse(localStorage.config);
        this.loadingConfig = false;
      } else {
        HTTP.get("configuration").then(res => {
          localStorage.setItem("config", JSON.stringify(res.data));
          this.configuration = JSON.parse(localStorage.config);
          this.loadingConfig = false;
        });
      }
    },
    hasStorageConfiguration() {
      return localStorage.config !== undefined;
    },
    getImageURL(image) {
      return (
        this.configuration.images.secure_base_url +
        this.configuration.images.poster_sizes[4] +
        image
      );
    },
    ...mapActions({
      setTitle: "navBar/setTitle"
    }),
    getImages() {
      this.isImageLoading = true;
      HTTP.get(`movie/${this.id}/images`).then(res => {
        this.images = res.data.backdrops;
        this.isImageLoading = false;
      });
    },
    getMovie() {
      this.isMovieLoading = true;
      HTTP.get(`movie/${this.id}`).then(res => {
        this.setTitle(res.data.title);
        this.movie = res.data;
        this.isMovieLoading = false;
      });
    },
    cleanFields() {
      this.images = [];
      this.movie = [];
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getImages();
      this.getMovie();
    }
  }
};
</script>

<style>
</style>