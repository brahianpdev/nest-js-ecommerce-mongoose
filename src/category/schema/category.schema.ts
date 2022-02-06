import { Schema } from 'mongoose';

export const CategorySchema = new Schema({
  name: { type: String, required: true },
  state: { type: Boolean, default: true },
  created: {
    type: Date,
    default: Date.now,
  },
});
