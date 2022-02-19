export class CreateBrandDTO {
  name: string;
}

export type UpdateBrandDTO = Partial<CreateBrandDTO>;
