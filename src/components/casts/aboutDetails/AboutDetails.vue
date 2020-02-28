<template>
  <v-container>
    <CarouselImages :id="id" />
  </v-container>
</template>

<script>
import { HTTP } from "../../../plugins/axios";
import { mapActions } from "vuex";
import CarouselImages from "./CarouselImages";

export default {
  name: "AboutDetails",
  components: {
    CarouselImages
  },
  props: ["id"],
  created() {
    this.setTitle();
  },
  methods: {
    ...mapActions({
      setTitleNav: "navBar/setTitle"
    }),
    setTitle() {
      HTTP.get(`person/${this.id}`).then(res => {
        this.setTitleNav(res.data.name);
      });
    }
  }
};
</script>

<style>
</style>