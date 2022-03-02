import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class CreateSubCategoryDTO {
  @IsNotEmpty()
  @MinLength(8, {
    message: 'The min length of name of subcategory is 8 characters',
  })
  @MaxLength(15, {
    message: 'The min length of name of subcategory is 15 characters',
  })
  name: string;
}

export type UpdateSubCategoryDTO = Partial<CreateSubCategoryDTO>;
