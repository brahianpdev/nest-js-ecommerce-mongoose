import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
  email: string;
  state: boolean;
  isEmailConfirmed: boolean;
  createdAt?: Date;
}
