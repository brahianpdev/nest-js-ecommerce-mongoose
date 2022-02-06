import { Document } from 'mongoose';

export interface Product extends Document {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  state: boolean;
  created: Date;
}
