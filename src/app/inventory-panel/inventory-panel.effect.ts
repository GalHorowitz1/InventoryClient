import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {InventoryService} from '../shared/services/inventory.service';
import * as InventoryAction from './inventory-panel.action';
import {Product} from '../shared/models/product';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InventoryEffect {

  constructor(private action$: Actions,
              private inventoryService: InventoryService) {
  }


  @Effect()
  getProductList$ = this.action$
    .ofType(InventoryAction.GET_PRODUCT_LIST_FROM_SERVER)
    .map((action: InventoryAction.GetProductListFromServer) => {
      return action.payload;
    })
    .mergeMap(payload => this.inventoryService.getAllProductd())
    .map(data => {
      return new InventoryAction.GetProductListFromServerSuccess(data as Product[]);
    }).catch(err => {
      console.error('Error at GET_PRODUCT_LIST_FROM_SERVER', err);
      return Observable.of(null);
    });


  @Effect()
  deleteProduct$ = this.action$
    .ofType(InventoryAction.DELETE_PRODUCT)
    .map((action: InventoryAction.DeleteProduct) => action.payload)
    .mergeMap(payload => this.inventoryService.deleteProduct(payload))
    .map(data => {
      return new InventoryAction.GetProductListFromServer();
    }).catch(err => {
      console.error('Error at DELETE_PRODUCT', err);
      return Observable.of(null);
    });
}
