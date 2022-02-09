import { Document } from 'mongoose';

export interface Comment extends Document {
  id: string;
  productID: string;
  comment: string;
  userID: string;
  state: boolean;
  created: Date;
}
