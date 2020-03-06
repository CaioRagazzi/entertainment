<template>
  <v-toolbar color="primary" dark v-model="show" max-height="96px">
    <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-col sm="2" class="pt-5">
      <v-text-field class="pt-3" @keydown.enter="goToSearch()" label="Search" v-model="searchText"></v-text-field>
    </v-col>
    <v-btn @click="goToSearch()" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-snackbar v-model="isAlert" bottom left color="warning">
      <b class="black--text">Already searched!</b>
      <v-btn color="black" text @click="isAlert = false">Close</v-btn>
    </v-snackbar>
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
      searchText: "",
      isAlert: false
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
        this.$router
          .push({
            name: "SearchAll",
            params: { searchWord: this.searchText }
          })
          .catch(() => {
            this.isAlert = true
          });
      }
    }
  }
};
</script>

<style scoped>
</style>