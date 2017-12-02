import {Product} from '../shared/models/product';
import * as InventoryAction from './inventory-panel.action';

export type Action = InventoryAction.All;

export interface InventoryState {
  products: Product[];
}

const defaultInventoryState: InventoryState = {
  products: []
};

export function inventoryReducer(state: InventoryState = defaultInventoryState, action: Action) {
  switch (action.type) {

    case InventoryAction.GET_PRODUCT_LIST_FROM_SERVER_SUCCESS: {
      return Object.assign({}, {
        products: action.payload
      });
    }

    default:
      return state;
  }
}
