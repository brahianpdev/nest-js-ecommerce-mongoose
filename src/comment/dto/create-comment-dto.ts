import { IsNotEmpty } from 'class-validator';
export class CreateCommentDTO {
  @IsNotEmpty()
  productID: string;

  @IsNotEmpty()
  comment: string;

  @IsNotEmpty()
  userID: string;
}

export type UpdateCommentDTO = Partial<CreateCommentDTO>;
