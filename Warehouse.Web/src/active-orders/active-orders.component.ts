const ORDERS: Order[] = [
    {id: 1, delivered: false, items: [
        {name: 'cola', amount: 4},
        {name: 'sprite', amount: 7},
        {name: 'voda', amount: 12},
        {name: 'kava', amount: 1},
    ]},
    {id: 2, delivered: false, items: [
        {name: 'cola', amount: 4},
        {name: 'sprite', amount: 7},
        {name: 'voda', amount: 12},
        {name: 'kava', amount: 1},
    ]},
    {id: 3, delivered: true, items: [
        {name: 'voda', amount: 1},
        {name: 'sprite', amount: 13}
    ]}
]

import {Component} from '@angular/core';
import {Order} from '../order/order';

@Component({
    selector: 'active-orders',
    templateUrl: 'src/active-orders/active-orders.template.html'
})

export class ActiveOrdersComponent{
    orders: Order[];

    constructor(){
        this.orders = ORDERS;
    }

    onClick(order: Order): void{
        var indexOfOrder = this.orders.indexOf(order);
        this.orders.splice(indexOfOrder, 1);
    }
}