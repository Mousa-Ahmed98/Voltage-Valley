import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ICart } from '../../models/icart';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent{
  cartService: CartService;
  cartItems!: ICart[];
  Math = Math;
  total = 0;
  favoritesService!: FavoritesService;
  constructor(cartService: CartService, facouritesService: FavoritesService)
  {
    this.cartService = cartService;
    this.cartItems = cartService.cartProducts;
    this.favoritesService = facouritesService;
    console.log(cartService.cartProducts);
  }

  getProductsTotal(): number {
    let sum = 0;
    this.cartItems.forEach(element => {
      sum += element.product.quantity * element.product.price;
    });
    return parseFloat(sum.toFixed(2));
  }
  
  getDiscount(): number {
    return parseFloat((this.getProductsTotal() * 0.02).toFixed(2));
  }
  
  getShippingCharge(): number {
    return 25;
  }
  
  getEstimatedTax(): number {
    return parseFloat((this.getProductsTotal() * 0.035).toFixed(2));
  }
  
  getTotal(){
    return parseFloat((this.getProductsTotal() - this.getDiscount() + this.getShippingCharge() + this.getEstimatedTax()).toFixed(2));
  }

  deleteProduct(cartItem: ICart){
    let index = this.cartItems.indexOf(cartItem)
    if(index != -1){
      this.cartItems.splice(index, 1);
    }
  }

  toggleFavorites(id: Number){
    if(this.favoritesService.favorites.includes(id)){
      this.favoritesService.removeFromFavorites(id)
    }
    else{
      this.favoritesService.addToFavorites(id);
    }
  }

  isFavorite(id: Number){
    return this.favoritesService.isFavorite(id);
  }


  
  
}
