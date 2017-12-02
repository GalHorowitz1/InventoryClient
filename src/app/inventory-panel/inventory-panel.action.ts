import {Action} from '@ngrx/store';
import {Product} from '../shared/models/product';

export const GET_PRODUCT_LIST_FROM_SERVER = 'call server - Get product';
export const GET_PRODUCT_LIST_FROM_SERVER_SUCCESS = 'Get product list success';
export const DELETE_PRODUCT = 'delete product';


export class GetProductListFromServer implements Action {
  readonly type = GET_PRODUCT_LIST_FROM_SERVER;
  constructor(public payload?: any) {
  }
}

export class GetProductListFromServerSuccess implements Action {
  readonly type = GET_PRODUCT_LIST_FROM_SERVER_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: Product) {
  }
}


export type All
  = GetProductListFromServerSuccess |
    DeleteProduct |
  GetProductListFromServer;
