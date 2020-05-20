<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated flat class="bg-transparent text-white flex flex-center" style="height: 10vh">
      <q-tabs v-model="tab" narrow-indicator dense align="center" class="text-purple">
        <q-tab :ripple="{ color: 'orange' }" name="createEntry" icon="create" label="Создание" />
        <q-tab :ripple="{ color: 'orange' }" name="checkEntries" icon="check" label="Просмотр" />
        <q-tab :ripple="{ color: 'orange' }" name="analytics" icon="bar_chart" label="Аналитика" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <q-tab-panels v-model="tab" animated class="flex flex-center">
        <q-tab-panel class="q-pa-none" name="createEntry">
          <createEntryComponent />
        </q-tab-panel>
        <q-tab-panel class="q-pa-none" name="checkEntries">
          <statsComponent />
        </q-tab-panel>
        <q-tab-panel class="q-pa-none" name="analytics">
          <analyticsComponent />
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script>
import createEntryComponent from "components/createEntryComponent";
import statsComponent from "components/statsComponent";
import analyticsComponent from "components/analyticsComponent";

export default {
  name: "PageIndex",
  components: { createEntryComponent, statsComponent, analyticsComponent },
  data() {
    return {
      tab: "createEntry"
    };
  },
  created() {
    this.$store.dispatch("entriesStore/fetchData");
  }
};
</script>
