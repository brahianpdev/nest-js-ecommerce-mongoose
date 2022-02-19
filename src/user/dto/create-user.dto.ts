export class CreateUserDTO {
  username: string;
  password: string;
  email: string;
  role: string;
}

export type UpdateUserDTO = Partial<CreateUserDTO>;
