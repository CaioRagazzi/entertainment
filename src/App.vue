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
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  },
  created() {
    if (this.configuration.images === undefined) {
      this.getConfiguration();
    }
  },
  methods: {
    ...mapActions({
      getConfiguration: "configuration/getConfiguration"
    })
  },
  computed: {
    ...mapGetters({
      configuration: "configuration/configuration"
    })
  }
};
</script>
