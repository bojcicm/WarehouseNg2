import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateOrderComponent} from '../create-order/create-order.component';
import {ActiveOrdersComponent} from '../active-orders/active-orders.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/active-orders',
    pathMatch: 'full'
  },
  {
    path: 'active-orders',
    component: ActiveOrdersComponent
  },
  {
    path: 'create-order',
    component: CreateOrderComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

