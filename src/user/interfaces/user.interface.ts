import { Document } from 'mongoose';

export interface User extends Document {
  _id: string;
  username: string;
  password: string;
  email: string;
  role: string;
  state: boolean;
  createdAt?: Date;
}
