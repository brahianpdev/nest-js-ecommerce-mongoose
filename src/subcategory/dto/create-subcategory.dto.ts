import { IsNotEmpty, Length } from 'class-validator';
export class CreateSubCategoryDTO {
  @IsNotEmpty()
  @Length(8, 15)
  name: string;
}

export type UpdateSubCategoryDTO = Partial<CreateSubCategoryDTO>;
