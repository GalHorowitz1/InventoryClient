import {Component} from '@angular/core';
import {InventoryService} from './shared/services/inventory.service';
import {Store} from "@ngrx/store";
import {AppState} from "./shared/models/appState";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private store: Store<AppState>,
    private inventoryService: InventoryService) {
  }

  /**
   * create mock data
   */
  startDemo() {
    this.inventoryService.demoData();
  }

}
