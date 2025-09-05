


export interface OrderDetail {
    id: number;
    orderId: number;
    itemId: number;
    quantity: number;
    price: number;
    total: number;
    createdAt: string;
    updatedAt: string | null;
}
