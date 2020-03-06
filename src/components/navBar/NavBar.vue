<template>
  <v-toolbar color="primary" dark v-model="show" max-height="96px">
    <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-col sm="2" class="pt-5">
      <v-text-field class="pt-3" label="Search" v-model="searchText"></v-text-field>
    </v-col>
    <v-btn @click="goToSearch()" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      show: true,
      searchText: ""
    };
  },
  computed: {
    ...mapGetters({
      title: "navBar/title",
      searchInfo: "data/getSearchInfo"
    })
  },
  methods: {
    ...mapActions({
      toggleSideBar: "sideBar/toggleSideBar"
    }),
    ...mapMutations({
      setSearchInfo: "data/setSearchInfo"
    }),
    goToSearch() {
      if (this.searchText.trim() === "") {
        return;
      } else {
        this.$router.push({
          name: "SearchAll",
          params: { searchWord: this.searchText }
        });
      }
    }
  }
};
</script>

<style scoped>
</style>