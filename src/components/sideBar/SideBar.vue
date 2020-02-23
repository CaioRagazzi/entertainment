<template>
  <v-navigation-drawer fixed v-model="isOpen" @input="toggle">
    <v-list>
      <v-subheader>REPORTS</v-subheader>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters({
      isSideBarOpen: "sideBar/isShow"
    }),
    isOpen: {
      get: function () {
        return this.isSideBarOpen
      },
      set: function () {
      }
    }
  },
  methods: {
    toggle(event){
      if (!event) {
        this.toggleSideBar()
      }
    },
    ...mapActions({
      toggleSideBar: "sideBar/toggleSideBar"
    }),
  }
};
</script>

<style>
</style>