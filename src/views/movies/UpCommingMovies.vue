<template>
  <GridUpComming />
</template>

<script>
import GridUpComming from "../../components/movies/upComming/gridUpComming";
import { mapActions } from "vuex";

export default {
  name: "UpCommingMovies",
  components: {
    GridUpComming
  },
  created(){
    this.setTitle("Upcomming Movies")
  },
  methods:{
    ...mapActions({
      setTitle: "navBar/setTitle"
    })
  }
};
</script>

<style>
</style>