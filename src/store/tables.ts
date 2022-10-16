import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

import { TablesService } from "@services";

const tablesStore = defineStore("tables", () => {
  const tables: Ref<TablesService.ITable[]> = ref<TablesService.ITable[]>([]);
  const loading: Ref<boolean> = ref<boolean>(false);

  /** The 'toggleLoading' function toggles the boolean value of loading */
  function toggleLoading(): void {
    loading.value = !loading.value;
  }

  /** The 'refreshTables' function gets the list of tables from TablesService and updates the corresponding state  */
  async function refreshTables(): Promise<void> {
    loading.value = true;
    const tablesResponse: TablesService.ITable[] = await TablesService.get();
    tables.value = tablesResponse;
    loading.value = false;
  }

  return { tables, loading, toggleLoading, refreshTables };
});

export default tablesStore;
