<template>
  <q-page class="flex flex-center">
    <q-table
      title="Entries"
      :data="data"
      :columns="columns"
      row-key="id"
      :loading="loading"
      virtual-scroll
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      style="height: 30vh; width: 50vw;"
    >
      <template v-slot:top>
        <q-btn color="primary" flat icon="add" :disable="loading" @click="addRow" />
        <q-btn
          class="q-ml-sm"
          icon="remove"
          flat
          color="primary"
          :disable="loading"
          @click="removeRow"
        />
        <q-space />
        <q-btn color="primary" flat icon="send" :disable="loading" />
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="partnerName" :props="props">
            {{ props.row.partnerName }}
            <q-popup-edit v-model="props.row.partnerName">
              <q-input v-model="props.row.partnerName" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="documentsCount" :props="props">
            {{ props.row.documentsCount }}
            <q-popup-edit v-model="props.row.documentsCount">
              <q-input v-model="props.row.documentsCount" type="number" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="notariusCost" :props="props">
            {{ props.row.notariusCost }}
            <q-popup-edit v-model="props.row.notariusCost">
              <q-input v-model="props.row.notariusCost" type="number" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="translatorCost" :props="props">
            {{ props.row.translatorCost }}
            <q-popup-edit v-model="props.row.translatorCost">
              <q-input v-model="props.row.translatorCost" type="number" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import tableColumns from "./assets/tableColumns";
import emptyEntry from "./assets/emptyEntry";
import tableMethods from "./assets/tableMethods";

export default {
  name: "createEntryComponent",
  props: {},
  data() {
    return {
      loading: false,
      columns: tableColumns,
      data: [emptyEntry(this.length, "Партнёр")],
      pagination: {
        rowsPerPage: 0
      }
    };
  },
  methods: tableMethods
};
</script>
