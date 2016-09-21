export class NewOrder {
  items: NewOrderItem[];
}

export class NewOrderItem{
    name: string;
    amount: number;

    constructor(){
      this.name = "";
      this.amount = 0;
    }
}