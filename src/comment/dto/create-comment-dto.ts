import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class CreateCommentDTO {
  @IsNotEmpty()
  productID: string;

  @IsNotEmpty()
  @MinLength(12, { message: 'The min length of comment is 12 characters' })
  @MaxLength(180, { message: 'The max length of comment is 180 characters' })
  comment: string;

  @IsNotEmpty()
  userID: string;
}

export type UpdateCommentDTO = Partial<CreateCommentDTO>;
