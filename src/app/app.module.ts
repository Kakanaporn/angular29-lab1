import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PanelComponent } from './panel/panel.component';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductItemComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
