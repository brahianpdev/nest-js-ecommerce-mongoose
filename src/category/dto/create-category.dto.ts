import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class CreateCategoryDTO {
  @IsNotEmpty()
  @MinLength(4, { message: 'The ming length of category name is 4 characters' })
  @MaxLength(12, {
    message: 'The max length of category name is 12 characters',
  })
  name: string;
}

export type UpdateCategoryDTO = Partial<CreateCategoryDTO>;
