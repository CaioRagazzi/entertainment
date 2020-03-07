<template>
  <v-dialog :value="showModal" @input="setShowModal" scrollable fullscreen>
    <v-card>
      <v-tabs>
        <v-tab>
          <v-icon left>mdi-filmstrip</v-icon>Episodes
        </v-tab>
        <v-tab>
          <v-icon left>mdi-filmstrip</v-icon>Overview
        </v-tab>
        <v-tab-item>
          <v-container>
            <div v-if="isLoading" class="d-flex justify-center align-center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <div>
              <Grid :data="data" :loading="isLoading" :type="type" />
              <div>
                <v-pagination
                  v-if="totalPages > 0"
                  :length="totalPages"
                  :value="currentPage"
                  :total-visible="8"
                  @input="changePage"
                ></v-pagination>
              </div>
            </div>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container v-if="getSeasonOverview">{{ getSeasonOverview }}</v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-dialog>
</template>

<script>
import Grid from "../../components/grid/Grid";
import { dataMixins } from "../../mixins/data";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ModalGrid",
  props: ["url", "type"],
  components: {
    Grid
  },
  mixins: [dataMixins],
  computed: {
    ...mapGetters({
      showModal: "episodes/getShowModal",
      getSeasonOverview: "episodes/getSeasonOverview"
    })
  },
  data() {
    return {
      componentName: "Modal Grid",
      modal: true
    };
  },
  methods: {
    ...mapMutations({
      setShowModal: "episodes/setShowModal"
    })
  }
};
</script>

<style>
</style>