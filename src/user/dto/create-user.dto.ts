export class CreateUserDTO {
  username: string;
  password: string;
  email: string;
  role: string;
  state: boolean;
  createdAt: Date;
}

export type UpdateUserDTO = Partial<CreateUserDTO>;
