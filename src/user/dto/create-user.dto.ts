import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @Length(8, 15)
  username: string;

  @IsNotEmpty()
  @Length(12, 30)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export type UpdateUserDTO = Partial<CreateUserDTO>;
