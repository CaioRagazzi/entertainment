<template>
  <v-app-bar class app color="primary" dark v-model="show">
    <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: true,
      items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
    };
  },
  computed: {
    ...mapGetters({
      title: "navBar/title"
    })
  },
  methods: {
    ...mapActions({
      toggleSideBar: "sideBar/toggleSideBar"
    })
  }
};
</script>

<style>
</style>