<template>
  <v-container class="d-flex flex-wrap">
    <div class="d-flex align-center" v-for="cast in casts" :key="cast.id">
      <div>
        <v-img class="mb-2 ml-3 my-img" :src="getImageProfileURL + cast.profile_path" width="8rem"></v-img>
      </div>
      <v-container class="pl-3" style="width: 12rem">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Character</v-list-item-title>
            <v-list-item-subtitle>{{ cast.character }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>{{ cast.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { HTTP } from "../../plugins/axios";
import { mapGetters } from "vuex";

export default {
  name: "CastDetails",
  props: ["movie"],
  data() {
    return {
      casts: []
    };
  },
  created() {
    this.getCast();
  },
  computed: {
    ...mapGetters({
      getImageProfileURL: "configuration/getImageProfileURL"
    })
  },
  methods: {
    async getCast() {
      await HTTP.get(`movie/${this.movie.id}/credits`).then(res => {
        this.casts = res.data.cast.filter(item => {
          return item.profile_path !== null;
        });
      });
    }
  }
};
</script>

<style scoped>
.my-img {
  border-radius: 10%;
}
</style>