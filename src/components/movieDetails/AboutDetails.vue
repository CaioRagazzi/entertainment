<template>
  <v-container>
    <div class="pt-3">
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
    </div>
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
</template>

<script>
import { HTTP } from "../../plugins/axios";
import { mapGetters } from "vuex";

export default {
  name: "AboutDetails",
  props: ["movie"],
  data() {
    return {
        images: []
    };
  },
  updated() {
    this.getImages();
  },
  computed:{
      ...mapGetters({
      getBaseUrlPlusSize: "configuration/getImageBackdropURL",
    }),
  },
  methods: {
    getImages() {
      HTTP.get(`movie/${this.movie.id}/images`).then(res => {
        this.images = res.data.backdrops;
      });
    },
    getImageURL: function(filePath) {
      return this.getBaseUrlPlusSize + filePath;
    }
  }
};
</script>

<style>
</style>