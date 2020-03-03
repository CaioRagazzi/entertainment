<template>
    <div class="d-flex flex-wrap justify-center">
      <Card
        v-for="item in data"
        :key="item.id"
        :id="item.id"
        :image="getImage(item)"
        :loading="loading"
        :title="getTitle(item)"
        :type="type"
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
  methods:{
    getImage(item){
      if (this.type === "movie" || this.type === "tv" || this.type === "season") {        
        return item.poster_path
      }
      if (this.type === "cast") {
        return item.profile_path
      }
    },
    getTitle(item){
      if (this.type === "movie") {
        return item.title
      }
      if (this.type === "cast" || this.type === "tv" || this.type === "season") {
        return item.name
      }
    }
  }
};
</script>

<style scoped>
</style>