import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class CreateBrandDTO {
  @IsNotEmpty()
  @MinLength(4, { message: 'The min length of brand name is 4 characters' })
  @MaxLength(12, { message: 'The max length of brand name is 12 characters' })
  name: string;
}

export type UpdateBrandDTO = Partial<CreateBrandDTO>;
