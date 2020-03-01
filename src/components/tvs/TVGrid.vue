<template>
  <div class="d-flex flex-wrap justify-center">
    <TVCard
      v-for="tv in tvs"
      :key="tv.id"
      :id="tv.id"
      :image="tv.poster_path"
      :loading="loading"
      :title="tv.name"
      :type="type"
    />
  </div>
</template>

<script>
import TVCard from "./TVCard";

export default {
  name: "TVGrid",
  components: {
    TVCard
  },
  props: ["tvs", "loading", "type"]
};
</script>

<style>
</style>