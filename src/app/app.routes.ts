import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import{getNgModuleById} from '@angular/core';
import {HomeComponent} from './features/home/home.component';
import {ProductsComponent} from './features/products/products.component';
import{PaymentsComponent} from './features/payments/payments.component';
import{ContactUsComponent} from './features/contact-us/contact-us.component';



export let routes: Routes;
routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'payments', component: PaymentsComponent},
];
