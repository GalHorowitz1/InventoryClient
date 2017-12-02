import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';

const BASE_URL = 'http://localhost:8080';

@Injectable()
export class InventoryService {

  constructor(private http: HttpClient) {
  }

  /**
   * get all product from DB
   * @returns {Observable<Product[]>}
   */
  getAllProductd() {
    return this.http.get(BASE_URL + '/products');
  }

  /**
   * get one product by id
   * @param {string} id
   * @returns {Observable<Object>}
   */
  getProductByID(id: string) {
    return this.http.get(`${BASE_URL}/product/${id}`);
  }

  /**
   * create new product
   * @param {Product} product
   * @returns {Observable<Object>}
   */
  createNewProduct(product: Product) {
    return this.http.post(BASE_URL + '/product', product);
  }

  /**
   * delete product by ID
   * @param product
   */
  deleteProduct(product: Product) {
    return this.http.delete(BASE_URL + '/product/' + product.id);
  }


  /**
   * create mock data
   */
  demoData() {
    const temp: Product[] = [{
      id: '1',
      name: 'Cool Lime Starbucks Refreshers',
      price: 14.5,
      description: 'Real fruit juice, mint and a lime slice shaken with Green Coffee Extract for a boost of natural energy, served over ice.',
      image: 'https://globalassets.starbucks.com/assets/ff33f687c14044e6bf8222cf194acf38.jpg'
    }, {
      id: '2',
      name: 'Ombré Pink Drink',
      price: 10.5,
      description: 'As delicious as it is gorgeous. This refreshing Ombré Pink Drink combines our light, fruity Cool Lime Starbucks Refreshers',
      image: 'https://globalassets.starbucks.com/assets/fc862fb36e71455c97360082d513c48e.jpg'
    }, {
      id: '3',
      name: 'Nitro Cold Brew',
      price: 15.5,
      description: 'Our small-batch cold brew—slow-steeped for a super smooth taste—gets even better. We\'re infusing it with nitrogen for a naturally sweet flavor and cascading',
      image: 'https://globalassets.starbucks.com/assets/5aa2cac008124e2d9ce5568e35579ae5.jpg'
    }, {
      id: '4',
      name: 'Gingerbread Latte',
      price: 17,
      description: 'Sweet and delicately spicy gingerbread flavors mingle with our classic espresso and steamed milk and are topped with whipped cream and ground nutmeg for the perfect holiday touch',
      image: 'https://globalassets.starbucks.com/assets/dc80e1b2338e4d168da2fd929f80fbf7.jpg'
    }, {
      id: '5',
      name: 'Bacon, Gouda & Egg Breakfast Sandwich',
      price: 13,
      description: 'Sizzling Applewood smoked bacon, melty aged Gouda and a parmesan frittata are layered on an artisan roll for extra smoky breakfast goodness',
      image: 'https://globalassets.starbucks.com/assets/4984ba52f874425c88fd2d52b405f70d.jpg'
    }, {
      id: '6',
      name: 'Butterfly Cookie',
      price: 2,
      description: 'Ring in spring with this buttery sugar cookie shaped like a butterfly.',
      image: 'https://globalassets.starbucks.com/assets/d619021944704168bea5b55744cab3d1.jpg'
    }, {
      id: '7',
      name: 'Iced Lightly Sweet Chai Latte',
      price: 2,
      description: 'A less-sweet take on our beloved Classic Chai Tea Latte. Black tea--infused with cinnamon, clove and other warming spices--is mixed with milk',
      image: 'https://globalassets.starbucks.com/assets/045b352642424be895b579806bab729c.jpg'
    }];

    temp.forEach(item => {
      this.createNewProduct(item).subscribe(res => {
        console.log('temp', res);
      });
    });
    alert('demo ready');
  }
}
