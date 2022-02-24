import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentSchema = Comment & Document;

@Schema()
export class Comment {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  productID: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  comment: string;

  @Prop({ type: Boolean, default: true })
  state: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userID: mongoose.Schema.Types.ObjectId;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
