import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {routing} from './app.routes';

import {ActiveOrdersComponent} from '../active-orders/active-orders.component';
import {CreateOrderComponent} from '../create-order/create-order.component';

@NgModule({
  imports: [ 
    BrowserModule,
    routing
  ],

  declarations: [ 
    AppComponent,
    ActiveOrdersComponent,
    CreateOrderComponent ],
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }