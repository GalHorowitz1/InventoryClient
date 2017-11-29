import {Component} from '@angular/core';
import {InventoryService} from './shared/services/inventory.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private inventoryService: InventoryService) {
  }

  /**
   * create mock data
   */
  startDemo() {
    this.inventoryService.demoData();
  }

}
