<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pt-md">
      <q-card-section class="flex flex-center justify-around">
        <q-chip
          outline
          square
          color="red"
          text-color="white"
          icon="assignment"
          :label="item.weekDocuments"
        />
        <q-chip outline square color="red" text-color="white" icon="add" :label="item.weekIncome" />
        <q-chip
          outline
          square
          color="red"
          text-color="white"
          icon="remove"
          :label="item.weekExpense"
        />
        <q-chip
          outline
          square
          color="green"
          text-color="white"
          icon="timeline"
          :label="item.weekRevenue"
        />
        <q-list dense bordered padding class="q-mt-md rounded-borders full-width">
          <q-item v-for="day in days" :key="day.id">
            <q-item-section class="flex flex-center" avatar>
              <q-fab
                icon="keyboard_arrow_right"
                color="primary"
                flat
                direction="right"
                padding="md"
              >
                <q-badge
                  outline
                  class="flex flex-center q-ml-sm"
                  style="width: 48px"
                  color="red"
                >{{day.entryData.totalData[0].totalCount}}</q-badge>
                <q-badge
                  outline
                  class="flex flex-center q-ml-sm"
                  style="width: 48px"
                  color="red"
                >{{day.entryData.totalData[0].totalExpense}}</q-badge>
                <q-badge
                  outline
                  class="flex flex-center q-ml-sm"
                  style="width: 48px"
                  color="green"
                >{{day.entryData.totalData[0].totalIncome}}</q-badge>
              </q-fab>
            </q-item-section>
            <q-item-section></q-item-section>
            <q-item-section class="flex flex-center" side>
              <div class="row">
                <q-btn
                  color="green"
                  flat
                  @click="showDay(day)"
                >{{day.createdAt.split("/")[1]}} | {{day.entryData.totalData[0].documentsCount < 10 ? `0${day.entryData.totalData[0].documentsCount}` : day.entryData.totalData[0].documentsCount}}</q-btn>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn flat color="primary" label="OK" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import tDialogComponent from "./tDIalogComponent";
import PageIndex from '../pages/Index'

export default {
  name: "wDialogComponent",
  components: { tDialogComponent, PageIndex },
  data() {
    return {
      days: []
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
    setState() {
      this.days = this.item.weekEntryData;
    },
    showDay (actualDay) {
       this.$q.dialog({
        component: tDialogComponent,
        // parent: this,
        actualDay
      });
    }
  }
};
</script>