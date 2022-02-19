export class CreateCategoryDTO {
  name: string;
}

export type UpdateCategoryDTO = Partial<CreateCategoryDTO>;
