import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {InventoryPanelComponent} from './inventory-panel/inventory-panel.component';
import {ProductPreviewComponent} from './product-preview/product-preview.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {InventoryService} from './shared/services/inventory.service';
import {ProductNamePipe} from './shared/pipes/product-name.pipe';
import {RoutRoutingModule} from './rout/rout-routing.module';
import {DataStructuresComponent} from './data-structures/data-structures.component';
import {StoreModule} from '@ngrx/store';
import {AppReducers} from './shared/models/appState';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {InventoryEffect} from './inventory-panel/inventory-panel.effect';



@NgModule({
  declarations: [
    AppComponent,
    InventoryPanelComponent,
    ProductPreviewComponent,
    ProductCreateComponent,
    ProductNamePipe,
    DataStructuresComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([InventoryEffect]),
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    HttpClientModule,
    FormsModule,
    RoutRoutingModule
  ],
  providers: [
    InventoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
