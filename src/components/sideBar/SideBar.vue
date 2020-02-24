<template>
  <div>
    <v-navigation-drawer color="primary" fixed temporary v-model="isOpen" touchless dark>
      <v-list dense nav class="py-0">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-dashboard' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="goTo('/')">Upcomming Movies</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-dashboard' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="goTo('/NowPlaying')">Now Playing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-dashboard' }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="goTo('/popular')">Popular</v-list-item-title>
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