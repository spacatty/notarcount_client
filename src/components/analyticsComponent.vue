<template>
  <q-page class="flex flex-center">
    <analyticsChart :item="listAnalytics" />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import analyticsChart from "./analyticsCharts/analyticsChart";
export default {
  name: "analyticsComponent",
  components: {
    analyticsChart
  },
  computed: {
    ...mapGetters({ listAnalytics: "entriesStore/listAnalytics" })
  }
};
</script>

<style>
</style>