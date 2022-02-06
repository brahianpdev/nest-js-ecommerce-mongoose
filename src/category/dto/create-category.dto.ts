export class CreateCategoryDTO {
  name: string;
  state: boolean;
  createdAt: Date;
}

export type UpdateCategoryDTO = Partial<CreateCategoryDTO>;
