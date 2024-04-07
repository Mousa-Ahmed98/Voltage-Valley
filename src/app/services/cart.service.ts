import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ICart } from '../models/icart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: ICart[] = [];
  constructor() { }

  addItem(product: IProduct) {
    this.removeItem(product.id);
    this.cartProducts.push({
      product: product
    });
  }

  removeItem(id: number) {
    this.cartProducts = this.cartProducts.filter((item) => item.product.id != id);
  }

  doesContain(id: number){
    return this.cartProducts.some(cart => cart.product.id == id);
  }
}
