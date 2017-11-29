import {Action} from "@ngrx/store";
import {inventoryReducer, InventoryState} from "../../inventory-panel/inventory-panel.reducer";

export interface IAction extends Action  {
  type: string;
  payload: any;
}

export interface AppState {
  inventory: InventoryState;
}

export const AppReducers = {products: inventoryReducer};
