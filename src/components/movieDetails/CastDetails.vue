<template>
  <v-container class="d-flex flex-wrap">
    <div class="d-flex align-center" v-for="cast in casts" :key="cast.cast_id">
      <div>
        <v-img class="mb-2 ml-3 my-img" :src="getImageProfileURL + cast.profile_path" width="8rem"></v-img>
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
import { mapGetters } from "vuex";

export default {
  name: "CastDetails",
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
  computed: {
    ...mapGetters({
      getImageProfileURL: "configuration/getImageProfileURL"
    })
  },
  methods: {
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