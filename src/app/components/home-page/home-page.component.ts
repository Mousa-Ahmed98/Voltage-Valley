import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AllProductsComponent } from '../all-products/all-products.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FilterComponent, NavBarComponent, AllProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
