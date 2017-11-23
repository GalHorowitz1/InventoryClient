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


@NgModule({
  declarations: [
    AppComponent,
    InventoryPanelComponent,
    ProductPreviewComponent,
    ProductCreateComponent,
    ProductNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutRoutingModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
