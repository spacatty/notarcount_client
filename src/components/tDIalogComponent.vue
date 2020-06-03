<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section class="flex flex-center q-pa-md">
        <q-table
          grid
          title
          :data="actualDay.dayEntryData"
          :columns="columns"
          :visible-columns="visubleColumns"
          row-key="id"
          virtual-scroll
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
        >
          <template v-slot:item="props">
            <div class="q-pa-xs col-12">
              <q-card>
                <q-card-section class="text-center">{{ props.row.partnerName }}</q-card-section>
                <q-separator />
                <q-card-section class="flex flex-center">
                  <q-list separator>
                    <q-item clickable v-ripple active active-class="bg-transparent text-grey-8">
                      <q-item-section avatar>
                        <q-icon name="subject" />
                      </q-item-section>
                      <q-item-section side>{{props.row.documentsCount}}</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple active active-class="bg-transparent text-grey-8">
                      <q-item-section avatar>
                        <q-icon name="translate" />
                      </q-item-section>
                      <q-item-section side>{{props.row.translatorCost}}</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple active active-class="bg-transparent text-grey-8">
                      <q-item-section avatar>
                        <q-icon name="work_outline" />
                      </q-item-section>
                      <q-item-section side>{{props.row.notariusCost}}</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple active active-class="bg-transparent text-grey-8">
                      <q-item-section avatar>
                        <q-icon name="credit_card" />
                      </q-item-section>
                      <q-item-section side>{{props.row.totalAmount}}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </template>
        </q-table>
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