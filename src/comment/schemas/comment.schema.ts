import { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  productID: { type: Schema.Types.ObjectId, ref: 'Product' },
  comment: { type: String, required: true },
  state: { type: Boolean, default: true },
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  created: {
    type: Date,
    default: Date.now,
  },
});
