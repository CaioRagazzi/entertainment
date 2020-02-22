<template>
  <v-app>
    <v-content>
      <NavBar />
      <SideBar />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sideBar/SideBar";

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
