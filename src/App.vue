<template>
  <v-app>
    <v-content>
      <NavBar />
      <v-container>
        <router-view></router-view>
      </v-container>
      <SideBar />
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
  },
  data: () => ({
    //
  })
};
</script>
