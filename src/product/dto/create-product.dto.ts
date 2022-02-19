export class CreateProductDTO {
  title: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  subcategory: string;
  comment: string;
  price: number;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
