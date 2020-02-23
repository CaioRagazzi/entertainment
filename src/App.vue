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
import { HTTP } from "./plugins/axios";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  },
  created() {
    HTTP
      .get("upcoming")
      .then(res => {
        console.log(res);
      });
  },
  data: () => ({
    //
  })
};
</script>
