import { Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDescriptopnComponent } from './components/product-descriptopn/product-descriptopn.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'details', component: ProductDescriptopnComponent },
];
