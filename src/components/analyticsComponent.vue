<template>
  <q-page class="flex flex-center">
    <documentsChart :item="listAnalytics" />
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
  computed: {
    ...mapGetters({ listAnalytics: "entriesStore/listAnalytics" })
  }
};
</script>

<style>
</style>