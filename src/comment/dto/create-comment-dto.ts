export class CreateCommentDTO {
  productID: string;
  comment: string;
  userID: string;
}

export type UpdateCommentDTO = Partial<CreateCommentDTO>;
