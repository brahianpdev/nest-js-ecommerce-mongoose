import { IsNotEmpty, IsNumber, Length } from 'class-validator';
export class CreateProductDTO {
  @IsNotEmpty()
  @Length(8, 20)
  title: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @Length(25, 250)
  description: string;

  @IsNotEmpty()
  @Length(3, 15)
  brand: string;

  @IsNotEmpty()
  @Length(3, 20)
  category: string;

  @IsNotEmpty()
  @Length(3, 20)
  subcategory: string;

  @IsNotEmpty()
  @Length(30, 180)
  comment: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
