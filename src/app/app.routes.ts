import { Routes } from '@angular/router';
import { ProductDescriptopnComponent } from './components/product-descriptopn/product-descriptopn.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'details', component: ProductDescriptopnComponent },
    { path: 'cart', component: CartComponent},
];
