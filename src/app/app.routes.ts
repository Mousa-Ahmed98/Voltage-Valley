import { Routes } from '@angular/router';
import { ProductDescriptopnComponent } from './components/product-descriptopn/product-descriptopn.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'details/:id', component: ProductDescriptopnComponent },
    { path: 'cart', component: CartComponent},
    { path: '**', component: NotFoundComponent}
];
