import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
export class CreateProductDTO {
  @IsNotEmpty()
  @MinLength(8, { message: 'The min length of title is 8 characters' })
  @MaxLength(20, { message: 'The max length of title is 8 characters' })
  title: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @MinLength(25, { message: 'The min length of description is 25 characters' })
  @MaxLength(250, {
    message: 'The max length of description is 250 characters',
  })
  description: string;

  @IsNotEmpty()
  @MinLength(4, { message: 'The min length of brand is 15 characters' })
  @MaxLength(15, { message: 'The max length of brand is 15 characters' })
  brand: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'The min length of category is 15 characters' })
  @MaxLength(15, { message: 'The max length of category is 15 characters' })
  category: string;

  @IsNotEmpty()
  @MinLength(4, { message: 'The min length of subcategory is 4 characters' })
  @MaxLength(20, { message: 'The max length of subcategory is 4 characters' })
  subcategory: string;

  @IsNotEmpty()
  @MinLength(30, { message: 'The min length of comment is 30 characters' })
  @MaxLength(180, { message: 'The max length of comment is 180 characters' })
  comment: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
