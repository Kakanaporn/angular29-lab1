import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PanelComponent } from './panel/panel.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BackendService } from '../backend.service';



@NgModule({
  declarations: [PanelComponent, ProductItemComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ],
  providers: [BackendService],
  exports: [PanelComponent, ProductItemComponent, ProductListComponent],
})
export class CatalogModule { }
