<template>
  <div class="d-flex flex-wrap justify-center">
    <Card
      v-for="item in data"
      :key="item.id"
      :id="item.id"
      :image="getImage(item)"
      :loading="loading"
      :title="getTitle(item)"
      :type="getType(item)"
    />
  </div>
</template>

<script>
import Card from "../card/Card";

export default {
  name: "Grid",
  props: ["data", "loading", "type"],
  components: {
    Card
  },
  methods: {
    getImage(item) {
      if (
        this.type === "movie" ||
        item.media_type === "movie" ||
        this.type === "tv" ||
        item.media_type === "tv" ||
        this.type === "season"
      ) {
        return item.poster_path;
      }
      if (this.type === "cast" || item.media_type === "person") {
        return item.profile_path;
      }
    },
    getTitle(item) {
      if (this.type === "movie" || item.media_type === "movie") {
        return item.title;
      }
      if (
        this.type === "cast" ||
        item.media_type === "person" ||
        this.type === "tv" ||
        item.media_type === "tv" ||
        this.type === "season"
      ) {
        return item.name;
      }
    },
    getType(item) {
      if (item.media_type) {
        return item.media_type;
      } else {
        return this.type;
      }
    }
  }
};
</script>

<style scoped>
</style>