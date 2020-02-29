<template>
  <v-container class="d-flex flex-wrap">
    <v-container class="d-flex justify-center align-center" v-if="loadingConfig">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <div v-else class="d-flex align-center" v-for="cast in casts" :key="cast.cast_id">
      <div class="container-cart-img" @click="goToCast(cast.id)">
        <v-img class="mb-2 ml-3 my-img" :src="getImageProfileURL(cast.profile_path)" width="8rem"></v-img>
      </div>
      <v-container class="pl-3" style="width: 12rem">
        <v-list>
          <v-row no-gutters>
            <v-col cols="12" sm="12">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Character</v-list-item-title>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-list-item-subtitle v-on="on">{{ cast.character }}</v-list-item-subtitle>
                    </template>
                    <span>{{ cast.character }}</span>
                  </v-tooltip>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" sm="20">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Name</v-list-item-title>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-list-item-subtitle v-on="on">{{ cast.name }}</v-list-item-subtitle>
                    </template>
                    <span>{{ cast.character }}</span>
                  </v-tooltip>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-list>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { HTTP } from "../../../plugins/axios";
import { configurationMixins } from "../../../mixins/configuration";

export default {
  name: "CastDetails",
  mixins: [configurationMixins],
  props: ["id"],
  data() {
    return {
      casts: [],
      isCastLoading: true
    };
  },
  created() {
    this.getCast();
  },
  methods: {
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
    goToCast(id) {
      this.$router.push({ name: "CastDetails", params: { id: id } });
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
.container-cart-img {
  cursor: pointer;
}
.my-img {
  border-radius: 10%;
}
</style>