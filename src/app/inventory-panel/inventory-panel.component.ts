import {Component, OnInit} from '@angular/core';
import {Product, ProductActions} from '../shared/models/product';
import {InventoryService} from '../shared/services/inventory.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../shared/models/appState';
import * as InventoryAction from './inventory-panel.action';


@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss']
})
export class InventoryPanelComponent implements OnInit {

  public products$;
  public filter = '';

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.products$ = this.store.select((s) => s.inventory.products).distinctUntilChanged();
  }

  ngOnInit() {
    this.refreshProductList();
  }

  /**
   * handle the product card actions
   * @param {ProductActions} event
   */
  productAction(event: ProductActions) {
    console.log(event);
    // in case of clicking delete
    if (event.action === 'delete') {
      this.store.dispatch(new InventoryAction.DeleteProduct(event.data));
    }
    // in case of clicking edit
    if (event.action === 'edit') {
      this.router.navigate(['/edit', event.data.id]);
    }
  }

  /**
   *  get all products from server
   */
  refreshProductList() {
    this.store.dispatch(new InventoryAction.GetProductListFromServer());
  }
}
