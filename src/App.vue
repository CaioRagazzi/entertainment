<template>
  <v-app>
    <v-content>
      <NavBar />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <SideBar />
    </v-content>
  </v-app>
</template>

<script>
import SideBar from "./components/sideBar/SideBar";
import NavBar from "./components/navBar/NavBar";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  },
  async created() {
    this.getConfiguration()
  },
  methods: {
    ...mapActions({
      getConfiguration: "configuration/getConfiguration"
    })
  }
};
</script>
