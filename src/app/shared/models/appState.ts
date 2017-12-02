import {inventoryReducer, InventoryState} from "../../inventory-panel/inventory-panel.reducer";


export interface AppState {
  inventory: InventoryState;
}

export const AppReducers = {inventory: inventoryReducer};
