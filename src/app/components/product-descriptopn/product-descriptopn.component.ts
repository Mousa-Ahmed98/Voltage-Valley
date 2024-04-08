import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-descriptopn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-descriptopn.component.html',
  styleUrl: './product-descriptopn.component.css'
})
export class ProductDescriptopnComponent {

  Math = Math;
  currentProduct: IProduct;
  currentImage: string;
  canAdd: boolean = true;
  cartService: CartService;
  favoritesService!: FavoritesService
  router: Router;
  constructor(productService: ProductService, cartService: CartService
    , router: Router, favoritesService: FavoritesService){
    this.currentProduct = productService.getCurrentProduct();
    this.currentImage = this.currentProduct.images[0];
    this.cartService = cartService;
    this.favoritesService = favoritesService;
    this.router = router;
    this.canAdd = !cartService.doesContain(this.currentProduct.id);
    console.log(this.currentProduct.rating);
  }

  changeBigImage(image: string) {
    this.currentImage = image
    }

    addOneMore(){
      if(this.currentProduct.orderQuantity + 1 <= this.currentProduct.quantity){
        this.currentProduct.orderQuantity += 1;
      }
    }
    subOneMore(){
      if(this.currentProduct.orderQuantity - 1 >= 1){
        this.currentProduct.orderQuantity -= 1;
      }
    }

    addToCart(){
      if(this.canAdd){
        this.cartService.addItem(this.currentProduct);
      }
      else{
        this.cartService.removeItem(this.currentProduct.id)
      }
      
      this.canAdd = !this.canAdd;
      console.log(this.currentProduct);
    }

    goToCart(){
      this.router.navigate(['/cart']);
    }

    toggleFavorites(id: Number){
      if(this.favoritesService.favorites.includes(id)){
        this.favoritesService.removeFromFavorites(id)
      }
      else{
        this.favoritesService.addToFavorites(id);
      }
    }
}
