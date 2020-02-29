<template>
  <div>
    <v-navigation-drawer color="primary" fixed temporary v-model="isOpen" touchless dark>
      <v-list dense nav class="py-0">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Movies</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="goTo('/')" link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-dashboard' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Upcomming</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="goTo('/NowPlaying')" link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-newspaper' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Now Playing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="goTo('/PopularMovies')" link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-account-box' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Popular</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="goTo('/TopRatedMovies')" link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-chevron-triple-up' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Top Rated</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">TV</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="goTo('/TV/AiringToday')" link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-television-box' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Airing Today</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Casts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="goTo('/PopularCast')" link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-account-box' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Popular</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-snackbar v-model="isAlert" top right color="warning">
      <b class="black--text">Already in</b>
      <v-btn color="black" text @click="isAlert = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isAlert: false
    };
  },
  computed: {
    ...mapGetters({
      isSideBarOpen: "sideBar/isShow"
    }),
    isOpen: {
      get: function() {
        return this.isSideBarOpen;
      },
      set: function(event) {
        if (!event) {
          this.toggle();
        }
      }
    }
  },
  methods: {
    goTo(destination) {
      if (this.$router.currentRoute.path !== destination) {
        this.$router.push({ path: destination });
      } else {
        this.isAlert = true;
      }
    },
    toggle() {
      this.toggleSideBar();
    },
    ...mapActions({
      toggleSideBar: "sideBar/toggleSideBar"
    })
  }
};
</script>

<style>
</style>