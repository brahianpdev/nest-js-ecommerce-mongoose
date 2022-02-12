import { Product } from 'src/product/interfaces/product.interface';
import { User } from 'src/user/interfaces/user.interface';

export interface ProductOrder {
  product: Product;
  quantity: number;
}

export interface Order extends Document {
  owner: User['_id'];
  products: ProductOrder[];
  totalPrice: number;
  created: Date;
}
