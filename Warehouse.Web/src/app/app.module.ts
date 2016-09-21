import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { Routing } from './app.routes';

import {ActiveOrdersComponent} from '../active-orders/active-orders.component';
import {CreateOrderComponent} from '../create-order/create-order.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    Routing
  ],

  declarations: [ 
    AppComponent,
    ActiveOrdersComponent,
    CreateOrderComponent ],
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }