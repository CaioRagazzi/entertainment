<template>
  <v-card @click="goToDetails" hover class="mb-5 mr-5" max-height="500" max-width="188" shaped>
    <v-img :src="image"></v-img>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["image", "id"],
  methods: {
    goToDetails() {
      this.$router.push({ name: "MovieDetails", params: { id: this.id } });
    }
  }
};
</script>

<style>
</style>