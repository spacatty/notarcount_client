<template>
  <q-page class="flex flex-center">
    <q-table
      class="createEntryTable"
      grid
      :data="tableData"
      :columns="columns"
      row-key="id"
      :loading="loading"
      virtual-scroll
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
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
      <template v-slot:item="props">
        <div class="col-xs-6 q-pa-xs items-center justify-evenly">
          <q-card class="q-pa-lg bg-grey-1">
            <q-list dense>
              <q-item v-for="col in props.cols" :key="col.name">
                <q-item-section>
                  <div
                    v-if="col.name === 'courierCost' || col.name === 'manager' || col.name === 'seller' "
                  >
                    <q-select
                      :label="col.label"
                      color="dark"
                      v-model="props.row[`${col.name}`]"
                      use-input
                      use-chips
                      hide-dropdown-icon
                      input-debounce="0"
                      new-value-mode="add"
                    >
                      <template v-slot:selected>
                        <q-chip
                          class="addEntryChip q-pa-md bg-purple-1"
                          dense
                          :label="props.row[`${col.name}`]"
                        />
                      </template>
                    </q-select>
                  </div>
                  <div v-else>
                    <q-select
                      :label="col.label"
                      color="dark"
                      v-model="props.row[`${col.name}`]"
                      use-input
                      use-chips
                      hide-dropdown-icon
                      input-debounce="0"
                      new-value-mode="add"
                    >
                      <template v-slot:selected>
                        <q-chip
                          class="addEntryChip q-pa-md bg-red-2"
                          dense
                          :label="props.row[`${col.name}`]"
                        />
                      </template>
                    </q-select>
                  </div>
                </q-item-section>
                <q-item-section side></q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
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
      tableData: [],
      loading: false,
      columns: tableColumns,
      pagination: {
        rowsPerPage: 2
      }
    };
  },
  methods: {
    ...tableMethods,
  },
  created() {
    this.tableData.push(emptyEntry(0, "Партнёр"));
  }
};
</script>
