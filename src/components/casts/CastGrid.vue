<template>
  <div>
    <div class="d-flex flex-wrap justify-center">
      <CardCasts
        v-for="cast in casts"
        :key="cast.id"
        :id="cast.id"
        :image="cast.profile_path"
        :loading="loading"
        :castName="cast.name"
      />
    </div>
  </div>
</template>

<script>
import CardCasts from "./CardCasts";

export default {
  name: "Upcoming",
  props: ["casts", "loading"],
  components: {
    CardCasts
  }
};
</script>

<style>
</style>