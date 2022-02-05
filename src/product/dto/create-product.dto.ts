export class CreateProductDTO {
  title: string;
  image: string;
  description: string;
  price: number;
  state: boolean;
  createdAt: Date;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
