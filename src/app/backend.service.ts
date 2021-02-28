import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts(): Product[]{
    return [
      { 
        name: 'ส้มโอ',
        price: 990
      },
      {
        name: 'แตงโม',
        price: 1000
      },
      {
        name: 'มะพร้่าวนํ้าหอม',
        price: 500
      }
    ];;
  }
  getProductId(productId:number) : Product {
    return;
  }
}
