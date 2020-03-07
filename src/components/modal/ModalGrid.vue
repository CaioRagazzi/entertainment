<template>
  <v-dialog :value="showModal" @input="setShowModal">
    <v-card>
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
      showModal: "episodes/getShowModal"
    }),
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
  },
};
</script>

<style>
</style>