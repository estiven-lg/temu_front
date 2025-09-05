// order.model.ts
export interface Order {
  id: any;
  personId: any;
  person: any;
  number: any;
  createdAt: any;
  updatedAt?: any;
  orderDetails: any[];
}
