import {Component} from '@angular/core';
import {NewOrder, NewOrderItem} from '../order/newOrder';

@Component({
    selector: 'create-order',
    templateUrl: 'src/create-order/create-order.template.html'
})

export class CreateOrderComponent{
    items: NewOrderItem[];
    newOrderItem: NewOrderItem; 

    constructor(){
        this.newOrderItem = new NewOrderItem();
        this.items = new Array<NewOrderItem>();
    }

    addItem(): void{
        let newItem = new NewOrderItem();

        newItem.name= this.newOrderItem.name;
        newItem.amount = this.newOrderItem.amount;

        this.items.push(newItem);

        this.newOrderItem.amount = 0;
        this.newOrderItem.name = "";
    }

    save(): void{
        //saveaj order i redirectaj na homepage
    }

    removeItem(item: NewOrderItem): void{
        var indexOfOrder = this.items.indexOf(item);
        this.items.splice(indexOfOrder, 1);
    }
}