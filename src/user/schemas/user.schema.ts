import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: {
    type: String,
    required: false,
    default: 'USER_ROLE',
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  state: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});
