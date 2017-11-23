import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, ProductActions} from '../shared/models/product';

const DEMO_IMAGE = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  @Input() product: Product;
  @Output() action: EventEmitter<ProductActions> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (!this.product.image.length) {
      this.product.image = DEMO_IMAGE;
    }
  }
}
