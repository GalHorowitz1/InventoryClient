import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/models/product';
import {InventoryService} from '../shared/services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  public edit: string;
  public product: Product = {
    id: new Date().getTime().toString(),
    name: '',
    price: 0,
    description: '',
    image: ''
  };

  constructor(private inventoryService: InventoryService,
              private router: Router,
              private route: ActivatedRoute) {
    this.edit = this.route.snapshot.paramMap.get('id'); // get the id from the router
  }

  ngOnInit() {
    if (this.edit && this.edit.length) { // check if the component is on edit mode and get the data
      this.inventoryService.getProductByID(this.edit).subscribe(res => {
        this.product = res as Product;
      }, err => {
        alert('faild to get product');
      });
    }
  }

  /**
   * create or edit a Product
   */
  createNewProduct() {
    this.inventoryService.createNewProduct(this.product).subscribe(res => {
      this.router.navigate(['/']);
    }, err => {
      alert('save faild');
    });
  }
}
