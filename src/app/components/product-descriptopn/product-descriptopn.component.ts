import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-descriptopn',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './product-descriptopn.component.html',
  styleUrl: './product-descriptopn.component.css'
})
export class ProductDescriptopnComponent {

  Math = Math;
  currentProduct: IProduct;
  currentImage: string;
  quantityToBeSold = 1;
  constructor(productService: ProductService){
    this.currentProduct = productService.getCurrentProduct();
    this.currentImage = this.currentProduct.images[0];
    console.log(this.currentProduct.rating);
  }

  changeBigImage(image: string) {
    this.currentImage = image
    }

    addOneMore(){
      if(this.quantityToBeSold + 1 <= this.currentProduct.quantity){
        this.quantityToBeSold += 1;
      }
    }
    subOneMore(){
      if(this.quantityToBeSold - 1 >= 1){
        this.quantityToBeSold -= 1;
      }
    }
}
