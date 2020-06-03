<template>
  <q-page class="flex flex-center">
    <q-virtual-scroll class="statsVirtualScroll" :items="listWeeks">
      <template v-slot="{ item, index }">
        <q-item class="q-my-sm" :key="index" v-ripple="{color: item.finished ? 'green' : 'red'}">
          <q-item-section avatar>
            <q-btn
              class="q-pa-xs flex flex-center"
              :color="item.finished ? 'green' : 'red'"
              :icon="item.finished ? 'done' : 'clear'"
              flat
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.periodFrom.fullDate }}</q-item-label>
            <q-item-label
              caption
              lines="1"
            >{{ typeof item.periodTill === "string" ? item.periodTill : item.periodTill.fullDate }}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-fab color="primary" icon="keyboard_arrow_left" direction="left" flat>
              <q-fab-action color="primary" @click="showWeeks(item)" icon="search" flat />
              <q-badge floating color="green" transparent :label="item.weekStats.weekDocuments" />
              <q-fab-action color="primary" @click="showAnalytics(item)" icon="show_chart" flat />
            </q-fab>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import wDialogComponentVue from "./wDialogComponent.vue";
import aDialogComponentVue from "./aDialogComponent.vue";

export default {
  name: "statsComponent",
  components: { wDialogComponentVue, aDialogComponentVue },
  data() {
    return {
      splitterModel: 50,
      carousel: false,
      slide: 1
    };
  },
  computed: {
    ...mapGetters({ listWeeks: "entriesStore/listWeeks" })
  },
  methods: {
    showWeeks(item) {
      this.$q.dialog({
        component: wDialogComponentVue,
        parent: this,
        item
      });
    },
    showAnalytics(item) {
      this.$q.dialog({
        component: aDialogComponentVue,
        parent: this,
        item
      });
    }
  }
};
</script>

<style>
</style>



      