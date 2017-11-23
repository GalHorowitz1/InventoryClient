import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(products: Product[], name: string): any {
    return products.filter(prod => (prod.name).toLowerCase().includes(name.toLowerCase()));
  }

}
