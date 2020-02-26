<template>
  <v-app>
    <NavBar />
    <SideBar />
    <v-content class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from "./components/sideBar/SideBar";
import NavBar from "./components/navBar/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  }
};
</script>
