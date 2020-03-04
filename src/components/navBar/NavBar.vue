<template>
  <v-toolbar class color="primary" dark v-model="show">
    <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-col sm="2" class="pt-5">
      <v-text-field class="pt-3" label="Search"></v-text-field>
    </v-col>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: true
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

<style scoped>
</style>