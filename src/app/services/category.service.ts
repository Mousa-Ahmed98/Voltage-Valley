import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) 
  {
  
  }

  getAllCategories(): Observable<any>{
    return this.http.get("https://api.escuelajs.co/api/v1/categories");
  }

}
