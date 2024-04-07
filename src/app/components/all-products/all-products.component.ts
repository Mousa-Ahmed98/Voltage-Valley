import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { CardAnimationDirective } from '../../direcrtives/card-animation.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [MatSlideToggleModule, MatCardModule, CommonModule, MatButtonModule, CardAnimationDirective],
  templateUrl: './all-products.component.html',
  
  styleUrls:['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  
  products: IProduct[];
  constructor(private productService: ProductService, private router: Router){
    this.products = [];
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    return this.productService.getAllProducts().subscribe(res => {
      console.log(res);
      this.products = res;
      this.products.forEach(element => {
        //console.log(element.title);
        element.sold = 0,
        element.rating = parseFloat((Math.floor(Math.random() * 500) / 100).toFixed(2)),
        element.insteadOf = element.price + element.price*.2,
        element.quantity = (Math.floor(Math.random() * 10))
        element.orderQuantity = 1;
      });
    });
  }
  goToDetails(product: IProduct) {
    this.productService.setCurrentProduct(product);
    this.router.navigate(["/details", product.id],);
    }
}
