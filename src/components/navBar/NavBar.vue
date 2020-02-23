<template>
  <v-app-bar app color="primary" dark v-model="show">
    <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
    <v-toolbar-title>Page title</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    ...mapActions({
      toggleSideBar: "sideBar/toggleSideBar"
    }),
  }
};
</script>

<style>
</style>