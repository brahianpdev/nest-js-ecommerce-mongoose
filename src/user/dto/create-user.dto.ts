import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(8, { message: 'The min length of username is 8 characters' })
  @MaxLength(15, { message: 'The max length of username is 15 characters' })
  username: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(12, { message: 'The min length of password is 12 characters' })
  @MaxLength(30, { message: 'The min length of password is 12 characters' })
  password: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;
}

export type UpdateUserDTO = Partial<CreateUserDTO>;
