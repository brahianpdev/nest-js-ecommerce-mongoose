import { ProductOrder } from '../interfaces/order.interface';

export interface CreateOrderDTO<ProductType = string> {
  products: ProductOrder<ProductType>[];
}
