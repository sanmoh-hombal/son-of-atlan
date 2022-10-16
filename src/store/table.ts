import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

import type { TablesService } from "@services";
import { useTablesStore } from "@store";

const tableStore = defineStore("table", () => {
  const tablesStore = useTablesStore();

  const table: Ref<TablesService.ITable | undefined> = ref<TablesService.ITable | undefined>();

  /**
   * It takes a table name as a parameter, finds the table in the tablesStore, and sets the
   * table.value to the table that was found
   *
   * @param {string} tableName - The name of the table to refresh.
   */
  function refreshActiveTable(tableName: string): void {
    const filteredTables: TablesService.ITable[] = tablesStore.tables.filter(
      (t: TablesService.ITable) => t.name === tableName
    );

    if (filteredTables.length > 0) {
      const activeTable = filteredTables.pop();
      table.value = activeTable;
    }
  }

  return { table, refreshActiveTable };
});

export default tableStore;
