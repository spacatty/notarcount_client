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

export default {
  name: "aDialogComponent",
  components: { VueApexCharts },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
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
      this.setState();
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
    formatDate(dateItem) {
      const date = new Date(dateItem);
      const dateTimeFormat = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });
      const [
        { value: day },
        ,
        { value: month },
        ,
        { value: year }
      ] = dateTimeFormat.formatToParts(date);
      return `${day} ${month}`;
    },
    setState() {
      let parsedDays = [];
      let documentsPerDay = [];
      this.item.weekEntryData.forEach(actualDay => {
        parsedDays.push(this.formatDate(actualDay.createdAt));
        documentsPerDay.push(actualDay.entryData.totalData[0].documentsCount);
      });
      this.options.xaxis.categories = parsedDays;
      this.series[0].data = documentsPerDay;
    }
  }
};
</script>