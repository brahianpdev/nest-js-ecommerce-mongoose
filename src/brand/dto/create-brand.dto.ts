export class CreateBrandDTO {
  name: string;
  state: boolean;
  createdAt: Date;
}

export type UpdateBrandDTO = Partial<CreateBrandDTO>;
