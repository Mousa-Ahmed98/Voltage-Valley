import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root' //allow injecting to whatever a consumer asks for it, also tree shaking
                    // which means the unused services will be removed by Angular and JS code optimizer
})
export class ProductService {

  private currentProduct: any;
  constructor(private http: HttpClient) 
  {
    this.currentProduct = null;
  }

  getAllProducts(): Observable<any>{
    return this.http.get("https://api.escuelajs.co/api/v1/products");
  }

  setCurrentProduct(product: IProduct){
    this.currentProduct = product;
  }
  getCurrentProduct(){
    return this.currentProduct;
  }
}
