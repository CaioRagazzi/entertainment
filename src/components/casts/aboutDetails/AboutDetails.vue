<template>
  <v-container>
    <CarouselImages :id="id" />
    <CastInfo :castId="id" />
  </v-container>
</template>

<script>
import { HTTP } from "../../../plugins/axios";
import { mapActions } from "vuex";
import CarouselImages from "./CarouselImages";
import CastInfo from "./CastInfo";

export default {
  name: "AboutDetails",
  components: {
    CarouselImages,
    CastInfo
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