<template>
  <q-page class="flex flex-center">
    <q-table
      class="createEntryTable"
      grid
      :data="listTableData"
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
        <q-btn color="primary" flat icon="send" :disable="loading" @click="sendData" />
      </template>
      <template v-slot:item="props">
        <div :class="$q.screen.width > 830? 'fit col q-pa-md' : 'fit'">
          <q-card class="bg-grey-1 flex flex-center">
            <q-list dense>
              <q-item v-for="col in props.cols" :key="col.name">
                <q-item-section class="flex flex-center">
                  <div
                    v-if="col.name === 'courierCost' || col.name === 'manager' || col.name === 'seller'"
                  >
                    <q-select
                      class="entrySelect flex"
                      :label="col.label"
                      color="dark"
                      :value="props.row[`${col.name}`]"
                      @input="e => mutateComputedData(e, props.rowIndex, col.name)"
                      use-input
                      use-chips
                      hide-dropdown-icon
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
                      class="entrySelect flex"
                      :label="col.label"
                      color="dark"
                      :value="props.row[`${col.name}`]"
                      @input="e => mutateComputedData(e, props.rowIndex, col.name)"
                      use-input
                      use-chips
                      hide-dropdown-icon
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
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tableColumns from "./assets/tableColumns";
import emptyEntry from "./assets/emptyEntry";

export default {
  name: "createEntryComponent",
  computed: {
    ...mapGetters({ listTableData: "entriesStore/listTableData" })
  },
  data() {
    return {
      loading: false,
      columns: tableColumns,
      pagination: {
        rowsPerPage: this.$q.screen.width <= 830 ? 1 : 2
      }
    };
  },
  methods: {
    ...mapActions({
      addRow: "entriesStore/addRow",
      removeRow: "entriesStore/removeRow",
      sendData: "entriesStore/sendData",
      changeColValue: "entriesStore/changeColValue"
    }),
    mutateComputedData(newValue, rowIndex, colName) {
      this.changeColValue({ newValue, rowIndex, colName });
    }
  }
};
</script>
