<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pt-md">
      <q-card-section class="flex flex-center">
        <div class="flex flex-center">
          <q-chip
            class="col-3 col-sm-6"
            outline
            square
            color="red"
            text-color="white"
            icon="assignment"
            :label="item.weekDocuments"
          />
          <q-chip
            class="col-3 col-sm-6"
            outline
            square
            color="red"
            text-color="white"
            icon="add"
            :label="item.weekIncome"
          />
          <q-chip
            class="col-3 col-sm-6"
            outline
            square
            color="red"
            text-color="white"
            icon="remove"
            :label="item.weekExpense.total"
          >
            <q-tooltip
              content-class="bg-white"
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <q-chip
                outline
                square
                color="red"
                text-color="white"
                icon="directions_bike"
                :label="item.weekExpense.courier"
              />
              <q-chip
                outline
                square
                color="red"
                text-color="white"
                icon="storefront"
                :label="item.weekExpense.seller"
              />
              <q-chip
                outline
                square
                color="red"
                text-color="white"
                icon="emoji_people"
                :label="item.weekExpense.manager"
              />
            </q-tooltip>
          </q-chip>
          <q-chip
            class="col-3 col-sm-6"
            outline
            square
            color="green"
            text-color="white"
            icon="timeline"
            :label="item.weekRevenue"
          />
        </div>
        <q-list dense bordered padding class="q-mt-md rounded-borders full-width">
          <q-item v-for="day in item.weekEntryData" class="items-center justify-between" :key="day.id">
            <q-item-section v-if="$q.screen.width > 415" class="flex flex-center" avatar>
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
                >{{day.entryData.totalData[0].totalIncome}}</q-badge>
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
                >{{day.entryData.totalData[0].totalCount}}</q-badge>
              </q-fab>
            </q-item-section>
            <q-item-section v-else>
              <div class="row flex flex-center fit">
                <q-badge
                  outline
                  class="flex flex-center"
                  style="width: 48px"
                  color="red"
                >{{day.entryData.totalData[0].totalIncome}}</q-badge>
                <q-badge
                  outline
                  class="flex flex-center"
                  style="width: 48px; margin-left: 5px;"
                  color="red"
                >{{day.entryData.totalData[0].totalExpense}}</q-badge>
                <q-badge
                  outline
                  class="flex flex-center"
                  style="width: 48px; margin-left: 5px;"
                  color="green"
                >{{day.entryData.totalData[0].totalCount}}</q-badge>
              </div>
            </q-item-section>
            <q-item-section avatar>
              <q-btn
                color="primary"
                flat
                @click="showDay(day)"
              >{{fmt(day.createdAt, day.entryData.totalData[0].documentsCount)}}</q-btn>
            </q-item-section>
            <!-- <q-item-section class="flex flex-center" side>
              
            </q-item-section>-->
          </q-item>
        </q-list>
        <q-card-actions align="center">
          <q-btn flat color="primary" label="OK" @click="onOKClick" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import tDialogComponent from "./tDIalogComponent";
import formatedDate from "./assets/formatDate";

export default {
  name: "wDialogComponent",
  components: { tDialogComponent },
  props: {
    item: Object
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
    },
    showDay(actualDay) {
      this.$q.dialog({
        component: tDialogComponent,
        actualDay
      });
    },
    fmt(date, docs) {
      return `${new formatedDate(date, ".").day} | ${
        docs < 10 ? `0${docs}` : docs
      }`;
    }
  }
};
</script>