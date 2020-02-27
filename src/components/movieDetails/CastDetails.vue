<template>
  <v-container class="d-flex flex-wrap">
    <v-container class="d-flex justify-center align-center" v-if="loadingConfig">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <div v-else class="d-flex align-center" v-for="cast in casts" :key="cast.cast_id">
      <div>
        <v-img class="mb-2 ml-3 my-img" :src="getImageProfileURL(cast.profile_path)" width="8rem"></v-img>
      </div>
      <v-container class="pl-3" style="width: 12rem">
        <v-list>
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
        </v-list>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { HTTP } from "../../plugins/axios";

export default {
  name: "CastDetails",
  props: ["id"],
  data() {
    return {
      casts: [],
      isCastLoading: true,
      loadingConfig: true,
      configuration: {}
    };
  },
  async created() {
    this.setConfiguration();
    this.getCast();
  },
  methods: {
    setConfiguration() {
      if (this.hasStorageConfiguration()) {
        this.configuration = JSON.parse(localStorage.config);
        this.loadingConfig = false;
      } else {
        HTTP.get("configuration").then(res => {
          localStorage.setItem("config", JSON.stringify(res.data));
          this.configuration = JSON.parse(localStorage.config);
          this.loadingConfig = false;
        });
      }
    },
    hasStorageConfiguration() {
      return localStorage.config !== undefined;
    },
    getImageProfileURL(image) {
      return (
        this.configuration.images.secure_base_url +
        this.configuration.images.profile_sizes[3] +
        image
      );
    },
    getCast() {
      this.isCastLoading = true;
      HTTP.get(`movie/${this.id}/credits`).then(res => {
        this.casts = res.data.cast.filter(item => {
          return item.profile_path !== null;
        });
        this.isCastLoading = false;
      });
    },
    cleanFields() {
      this.casts = [];
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

<style scoped>
.my-img {
  border-radius: 10%;
}
</style>