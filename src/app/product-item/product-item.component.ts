import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  onSelected: EventEmitter<ProductItemComponent> = new EventEmitter();
  
  isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  select(){
    this.onSelected.emit(this);
  }
}
