<template>
  <v-app>
    <NavBar />
    <SideBar />
    <v-content class="grey lighten-3">
      <v-container>
        <v-progress-circular v-if="isLoading" :size="50" color="primary" indeterminate></v-progress-circular>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { HTTP } from "./plugins/axios";
import SideBar from "./components/sideBar/SideBar";
import NavBar from "./components/navBar/NavBar";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  },
  data() {
    return {
      isLoading: true
    };
  },
  created() {
    this.getConfiguration();
  },
  methods: {
    ...mapMutations({
      updateConfiguration: "configuration/getConfiguration"
    }),
    getConfiguration() {
      this.isLoading = true;
      HTTP.get("configuration").then(res => {
        this.updateConfiguration(res.data);
        this.isLoading = false;
      });
    }
  }
};
</script>
