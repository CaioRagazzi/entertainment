<template>
  <v-dialog :value="showModal" @input="setShowModal">
    <div v-if="isLoading" class="d-flex justify-center align-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <Grid :data="data" :loading="isLoading" :type="type" />
      <div>
        <v-pagination
          :length="totalPages"
          :value="currentPage"
          :total-visible="8"
          @input="changePage"
        ></v-pagination>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import Grid from "../../components/grid/Grid";
import { dataMixins } from "../../mixins/data";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

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
    })
  },
  data() {
    return {
      componentName: "Modal Grid"
    };
  },
  methods: {
    ...mapMutations({
      setShowModal: "episodes/setShowModal"
    })
  },
  watch: {
    showModal: function(newVal) {
      if (newVal === true) {
        this.getData();
      }
    }
  }
};
</script>

<style>
</style>