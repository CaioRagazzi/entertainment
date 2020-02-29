<template>
  <v-container>
    <CarouselImages :id="id" />
    <TVInfo :tvId="id" />
  </v-container>
</template>
<script>
import { HTTP } from "../../../plugins/axios";
import { mapActions } from "vuex";
import CarouselImages from "./CarouselImages";
import TVInfo from "./TVInfo";

export default {
  name: "AboutDetails",
  components: {
    CarouselImages,
    TVInfo
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
      HTTP.get(`tv/${this.id}`).then(res => {
        this.setTitleNav(res.data.name);
      });
    }
  }
};
</script>

<style>
</style>