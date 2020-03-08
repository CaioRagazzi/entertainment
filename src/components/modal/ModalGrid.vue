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
            <div v-if="isEpisodesLoading" class="d-flex justify-center align-center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <div>
              <Grid :data="episodes" :loading="isEpisodesLoading" type="episode" />
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
import { mapGetters, mapMutations } from "vuex";
import { HTTP } from "../../plugins/axios";

export default {
  name: "ModalGridEpisodes",
  props: ["tvId"],
  components: {
    Grid
  },
  created() {
    this.getEpisodes();
  },
  computed: {
    ...mapGetters({
      showModal: "episodes/getShowModal",
      getSeasonOverview: "episodes/getSeasonOverview",
      getSeasonNumber: "episodes/getSeasonNumber"
    }),
    url: function() {
      return `/tv/${this.tvId}/season/${this.getSeasonNumber}`;
    }
  },
  data() {
    return {
      componentName: "Modal Grid Episodes",
      modal: true,
      episodes: [],
      totalPages: 0,
      currentPage: 1,
      isEpisodesLoading: true
    };
  },
  methods: {
    getEpisodes() {
      this.isEpisodesLoading = true;
      HTTP.get(this.url, {
        params: { page: this.currentPage }
      }).then(res => {
        this.totalPages = res.data.total_pages;
        this.episodes = res.data.episodes;
        this.isEpisodesLoading = false;
      });
    },
    ...mapMutations({
      setShowModal: "episodes/setShowModal"
    })
  }
};
</script>

<style>
</style>