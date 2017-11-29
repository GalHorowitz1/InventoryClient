import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryPanelComponent} from '../inventory-panel/inventory-panel.component';
import {ProductCreateComponent} from '../product-create/product-create.component';
import {DataStructuresComponent} from "../data-structures/data-structures.component";

const routes: Routes = [
  {path: '' , component: InventoryPanelComponent},
  {path: 'create' , component: ProductCreateComponent},
  {path: 'edit/:id' , component: ProductCreateComponent},
  {path: 'dataStructures' , component: DataStructuresComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutRoutingModule { }
