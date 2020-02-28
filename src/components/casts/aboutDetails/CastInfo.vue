<template>
  <v-container>
    <div v-if="isCastLoading" class="d-flex justify-center align-center">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-container v-else>
      <v-container>
        <v-list-item v-if="cast.biography" three-line>
          <v-list-item-content>
            <v-list-item-title>Overview:</v-list-item-title>
            <v-list-item-subtitle>{{ cast.biography }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-container>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-list-item v-if="cast.known_for_department" two-line>
              <v-list-item-content>
                <v-list-item-title>Known for Department:</v-list-item-title>
                <v-list-item-subtitle>{{ cast.known_for_department }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list-item v-if="cast.gender" two-line>
              <v-list-item-content>
                <v-list-item-title>Gender:</v-list-item-title>
                <v-list-item-subtitle>{{ cast.gender == 1 ? "Female" : "Male" }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="8">
            <v-list-item v-if="cast.homepage" two-line>
              <v-list-item-content>
                <v-list-item-title>Home Page:</v-list-item-title>
                <v-list-item-subtitle>
                  <a target="_blank" :href="cast.homepage">{{ cast.homepage }}</a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-col cols="12" sm="4">
          <v-list-item v-if="cast.deathday" two-line>
            <v-list-item-content>
              <v-list-item-title>Home Page:</v-list-item-title>
              <v-list-item-subtitle>{{ cast.deathday }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-list-item v-if="cast.place_of_birth" two-line>
              <v-list-item-content>
                <v-list-item-title>Place of Birth:</v-list-item-title>
                <v-list-item-subtitle>{{ cast.place_of_birth }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list-item v-if="cast.birthday" two-line>
              <v-list-item-content>
                <v-list-item-title>Birthday:</v-list-item-title>
                <v-list-item-subtitle>{{ cast.birthday }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { HTTP } from "../../../plugins/axios";

export default {
  name: "MovieInfo",
  props: ["castId"],
  data() {
    return {
      cast: {},
      isCastLoading: true
    };
  },
  created() {
    this.getCast();
  },
  methods: {
    getCast() {
      this.isCastLoading = true;
      HTTP.get(`person/${this.castId}`).then(res => {
        this.cast = res.data;
        this.isCastLoading = false;
      });
    },
    cleanFields() {
      this.cast = [];
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getCast();
    }
  }
};
</script>

<style>
</style>