import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //allow injecting to whatever a consumer asks for it, also tree shaking
                    // which means the unused services will be removed by Angular and JS code optimizer
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get("https://api.escuelajs.co/api/v1/products");
  }
}
