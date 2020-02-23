<template>
  <v-navigation-drawer fixed temporary v-model="isOpen" touchless></v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isSideBarOpen: "sideBar/isShow"
    }),
    isOpen: {
      get: function() {
        return this.isSideBarOpen;
      },
      set: function(event) {
        if (!event) {
          this.toggle();
        }
      }
    }
  },
  methods: {
    toggle() {
      this.toggleSideBar();
    },
    ...mapActions({
      toggleSideBar: "sideBar/toggleSideBar"
    })
  }
};
</script>

<style>
</style>