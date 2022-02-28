import { IsNotEmpty } from 'class-validator';
export class CreateBrandDTO {
  @IsNotEmpty()
  name: string;
}

export type UpdateBrandDTO = Partial<CreateBrandDTO>;
