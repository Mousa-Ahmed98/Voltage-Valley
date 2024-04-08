import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: Number[] = [];
  constructor() { }
  addToFavorites(id: Number){
    this.favorites.push(id)
  }

  removeFromFavorites(id: Number){
    let index = this.favorites.indexOf(id);
    if(index != -1){
      this.favorites.splice(index,1);
    }
  }

  isFavorite(id: Number){
    console.log("////////////");
    console.log(this.favorites);
    console.log("////////////");
    return this.favorites.includes(id);
    
  }
}
