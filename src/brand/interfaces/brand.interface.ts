import { Document } from 'mongoose';

export interface Brand extends Document {
  id: string;
  name: string;
  state: boolean;
  created: Date;
}
