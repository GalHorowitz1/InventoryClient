import {Product} from '../shared/models/product';
import {InventoryAction} from './inventory-panel.action';
import {IAction} from "../shared/models/appState";


export interface InventoryState {
  products: Product[];
}

const defaultInventoryState: InventoryState = {
  products: []
};

export function inventoryReducer(state: InventoryState = defaultInventoryState, action: IAction) {
  switch (action.type) {

    case InventoryAction.SOME: {
      debugger;

      return Object.assign({}, state, {
        products: action.payload.data
      });
    }

    default:
      return state;
  }
}
