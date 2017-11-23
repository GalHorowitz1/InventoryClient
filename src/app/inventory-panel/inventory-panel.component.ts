import {Component, OnInit} from '@angular/core';
import {Product, ProductActions} from '../shared/models/product';
import {InventoryService} from '../shared/services/inventory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss']
})
export class InventoryPanelComponent implements OnInit {

  public products: Product[] = [];
  public filter = '';

  constructor(private inventoryService: InventoryService,
              private router: Router) {
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


}
