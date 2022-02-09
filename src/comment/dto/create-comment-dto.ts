export class CreateCommentDTO {
  productID: string;
  comment: string;
  userID: string;
  state: boolean;
  createdAt: Date;
}

export type UpdateCommentDTO = Partial<CreateCommentDTO>;
