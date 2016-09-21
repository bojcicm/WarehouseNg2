import {Component} from '@angular/core';
import {NewOrder} from '../order/newOrder';

@Component({
    selector: 'create-order',
    templateUrl: 'src/create-order/create-order.template.html'
})

export class CreateOrderComponent{
    order: NewOrder[];

    addNewEntry(): void{
        //dodaj prazni item u listu
    }

    save(): void{
        //saveaj order i redirectaj na homepage
    }
}