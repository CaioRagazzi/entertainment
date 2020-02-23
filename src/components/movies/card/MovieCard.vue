<template>
  <v-card
    :hover="true"
    class="mb-5 mr-5"
    max-height="500"
    max-width="250"
    shaped
  >
    <v-img class="white--text align-end" :src="image"></v-img>
  </v-card>
</template>

<script>
export default {
    name: "MovieCard",
    props: ["image"],
};
</script>

<style>
</style>