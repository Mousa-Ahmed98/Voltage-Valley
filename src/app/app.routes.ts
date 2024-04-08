import { Routes } from '@angular/router';
import { ProductDescriptopnComponent } from './components/product-descriptopn/product-descriptopn.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'details', component: ProductDescriptopnComponent },
    { path: 'cart', component: CartComponent},
    { path: 'check-out', component: CheckOutComponent},
    { path: '**', component: NotFoundComponent},
];
