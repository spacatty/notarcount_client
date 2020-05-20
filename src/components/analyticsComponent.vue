<template>
  <q-page class="flex flex-center">
      <documentsChart :item="analytics" />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import documentsChart from "./analyticsCharts/documentsChart";
export default {
  name: "analyticsComponent",
  components: {
    documentsChart
  },
  data() {
    return {
      analytics: []
    };
  },
  computed: {
    ...mapGetters({ listAnalytics: "entriesStore/listAnalytics" })
  },
  created() {
    this.analytics = this.listAnalytics;
  }
};
</script>

<style>
</style>