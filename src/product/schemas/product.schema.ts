import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: Boolean, default: true },
  created: {
    type: Date,
    default: Date.now,
  },
});
