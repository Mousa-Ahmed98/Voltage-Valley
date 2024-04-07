import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService: CartService;
  constructor(cartService: CartService)
  {
    this.cartService = cartService;
    console.log(cartService.cartProducts);
  }
}
