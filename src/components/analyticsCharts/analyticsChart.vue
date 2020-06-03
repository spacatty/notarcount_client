<template>
  <div class="flex flex-center">
    <VueApexCharts :options="options" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "documentsChart",
  components: { VueApexCharts },
  data() {
    return {
      options: {
        chart: {
          id: "analyticsChart",
          type: "line",
          stacked: true,

          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          dataLabels: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          position: "top"
        },
        xaxis: {
          categories: [],
          labels: {
            rotate: 0
          }
        }
      },
      series: [
        {
          name: "Документы",
          data: []
        },
        {
          name: "Доходы",
          data: []
        },
        {
          name: "Затраты",
          data: []
        },
        {
          name: "Выручка",
          data: []
        }
      ]
    };
  },
  props: {
    item: Object
  },
  created() {
    this.options.xaxis.categories = this.item.WK.map(x => x.fullDate);
    this.series[0].data = this.item.WD;
    this.series[1].data = this.item.WI;
    this.series[2].data = this.item.WE;
    this.series[3].data = this.item.WR;
  }
};
</script>

<style>
</style>