<template>
  <v-container>
    <div v-if="isTVLoading" class="d-flex justify-center align-center">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-container v-else>
      <v-container>
        <v-list-item v-if="tv.overview" three-line>
          <v-list-item-content>
            <v-list-item-title>Overview:</v-list-item-title>
            <v-list-item-subtitle>{{ tv.overview }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-container>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-list-item v-if="tv.first_air_date" two-line>
              <v-list-item-content>
                <v-list-item-title>First air date:</v-list-item-title>
                <v-list-item-subtitle>{{ tv.first_air_date }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list-item v-if="tv.last_air_date" two-line>
              <v-list-item-content>
                <v-list-item-title>Last air date:</v-list-item-title>
                <v-list-item-subtitle>{{ tv.last_air_date }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="15">
            <v-list-item v-if="tv.homepage" two-line>
              <v-list-item-content>
                <v-list-item-title>Home Page:</v-list-item-title>
                <v-list-item-subtitle>
                  <a target="_blank" :href="tv.homepage">{{ tv.homepage }}</a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list-item v-if="tv.status" two-line>
              <v-list-item-content>
                <v-list-item-title>Statue:</v-list-item-title>
                <v-list-item-subtitle>{{ tv.status }}</v-list-item-subtitle>
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
  props: ["tvId"],
  data() {
    return {
      tv: {},
      isTVLoading: true
    };
  },
  created() {
    this.getTV();
  },
  methods: {
    getTV() {
      this.isTVLoading = true;
      HTTP.get(`tv/${this.tvId}`).then(res => {
        this.tv = res.data;
        this.isTVLoading = false;
      });
    },
    cleanFields() {
      this.tv = [];
    }
  },
  watch: {
    id: function() {
      this.cleanFields();
      this.getTV();
    }
  }
};
</script>

<style>
</style>