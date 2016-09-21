export class Order {
  id: number;
  delivered: boolean;
  items: OrderItem[];
}

export class OrderItem{
    name: string;
    amount: number;
}