import {Component, OnInit} from '@angular/core';
import {Product, ProductActions} from '../shared/models/product';
import {InventoryService} from '../shared/services/inventory.service';
import {Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {AppState} from "../shared/models/appState";
import {Observable} from "rxjs/Observable";
import {InventoryAction} from "./inventory-panel.action";


@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss']
})
export class InventoryPanelComponent implements OnInit {

  public products: Product[] = [];
  public filter = '';
  public counter$;

  constructor(private inventoryService: InventoryService,
              private store: Store<AppState>,
              private inventoryAction: InventoryAction,
              private router: Router) {
    this.counter$ = store.select(s => s.inventory);
    this.counter$.subscribe(item => {
      debugger;
    })
  }

  ngOnInit() {
    // get data for the first time
    this.getProductList();
  }

  /**
   * get all product from DB
   */
  getProductList() {
    this.inventoryService.getAllProductd().subscribe(products => {
      this.products = products as Product[];
    });
  }

  /**
   * handle the product card actions
   * @param {ProductActions} event
   */
  productAction(event: ProductActions) {
    console.log(event);
    // in case of clicking delete
    if (event.action === 'delete') {
      this.inventoryService.deleteProduct(event.data).subscribe(res => {
        this.getProductList();
      }, err => {
        alert('delete faild');
      });
    }
    // in case of clicking edit
    if (event.action === 'edit') {
      this.router.navigate(['/edit', event.data.id]);
    }
  }


  increment() {
    const data: Product = {
      id: '7',
      name: 'Iced Lightly Sweet Chai Latte',
      price: 2,
      description: 'A less-sweet take on our beloved Classic Chai Tea Latte. Black tea--infused with cinnamon, clove and other warming spices--is mixed with milk',
      image: 'https://globalassets.starbucks.com/assets/045b352642424be895b579806bab729c.jpg'
    };
    this.store.dispatch(this.inventoryAction.some(data));
  }


}
