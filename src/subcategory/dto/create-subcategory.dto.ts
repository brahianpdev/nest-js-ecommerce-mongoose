export class CreateSubCategoryDTO {
  name: string;
  state: boolean;
  createdAt: Date;
}

export type UpdateSubCategoryDTO = Partial<CreateSubCategoryDTO>;
