import { Schema } from 'mongoose';

export const OrderSChema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 0,
      },
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});
