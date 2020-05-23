<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
      <q-card class="q-dialog-plugin">
        <q-card-section class="flex flex-center q-pa-md">
          <q-table
          grid
            title
            :data="actualDay.entryData.firstData"
            :columns="columns"
            :visible-columns="visubleColumns"
            row-key="id"
            virtual-scroll
            :pagination.sync="pagination"
            :rows-per-page-options="[0]"
          ></q-table>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat color="primary" label="OK" @click="onOKClick" />
        </q-card-actions>
      </q-card>
  </q-dialog>
</template>

<script>
import tableColumns from "./assets/tableColumns";

export default {
  name: "tDialogComponent",
  data() {
    return {
      columns: tableColumns,
      visubleColumns: [
        "partnerName",
        "documentsCount",
        "notariusCost",
        "translatorCost",
        "totalAmount"
      ],
      pagination: {
        rowsPerPage: 0
      }
    };
  },
  props: {
    actualDay: Object
  },
  methods: {
    show() {
      this.$refs.dialog.show();
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
    }
  }
};
</script>