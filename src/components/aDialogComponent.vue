<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pt-md">
      <q-card-section class="flex flex-center justify-around">
        <VueApexCharts type="line" :options="options" :series="series"></VueApexCharts>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import formatedDate from './assets/formatDate'

export default {
  name: "aDialogComponent",
  components: { VueApexCharts },
  data() {
    return {
      options: {
        chart: {
          id: "dialogChart",
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          stroke: {
            curve: "straight"
          }
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "Документов",
          data: []
        }
      ]
    };
  },
  props: {
    item: Object
  },
  methods: {
    show() {
      this.$refs.dialog.show();
      this.setData();
    },
    hide() {
      this.$refs.dialog.hide();
    },
    onDialogHide() {
      this.$emit("hide");
    },

    onOKClick() {
      this.$emit("ok");
      this.hide();
    },
    setData() {
      this.item.weekEntryData.forEach(actualDay => {
        this.options.xaxis.categories.push(
          new formatedDate(actualDay.createdAt).dayMonthCap
        );
        this.series[0].data.push(
          actualDay.entryData.totalData[0].documentsCount
        );
      });
    }
  }
};
</script>