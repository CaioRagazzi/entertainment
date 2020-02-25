<template>
  <div>
    <div>
      <v-carousel
        :interval="3000"
        vertical
        hide-delimiter-background
        hide-delimiters
        dark
        height="50vh"
      >
        <v-carousel-item
          class="carousel"
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
    <v-divider class="pt-5"></v-divider>
    <div>
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
    <v-divider></v-divider>
    <h2>Related Videos</h2>
    <div class="d-flex flex-wrap justify-center pt-2">
      <iframe
        class="pl-2 pt-2"
        v-for="movie in movies"
        :key="movie.id"
        frameborder="0"
        width="600vw"
        height="300vh"
        :src="`https://www.youtube.com/embed/${movie.key}`"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
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
      movies: [],
      images: [],
      window: {
        width: 0
      }
    };
  },
  created() {
    if (this.configuration.images === undefined) {
      this.getConfiguration().then(() => {
        this.getMovie();
        this.getKeyWords();
        this.getVideos();
        this.getImages();
      });
    } else {
      this.getMovie();
      this.getKeyWords();
      this.getVideos();
      this.getImages();
    }
  },
  computed: {
    ...mapGetters({
      getBaseUrlPlusSize: "configuration/getImageBackdropURL",
      configuration: "configuration/configuration",
      isConfigLoading: "configuration/isLoading"
    }),
    getScreenSize: function() {
      return window.innerWidth;
    }
  },
  methods: {
    getImages() {
      HTTP.get(`movie/${this.$route.params.id}/images`).then(res => {
        console.log(res.data.backdrops);

        this.images = res.data.backdrops;
      });
    },
    getVideos() {
      HTTP.get(`movie/${this.$route.params.id}/videos`).then(res => {
        this.movies = res.data.results;
      });
    },
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
        this.movie = res.data;
        this.setTitle(res.data.title);
        this.isLoading = false;
      });
    },
    getImageURL: function(filePath) {
      console.log(filePath);

      return this.getBaseUrlPlusSize + filePath;
    }
  }
};
</script>

<style scoped>
.carousel {
  background: rgba(235,247,255,1);
}
</style>