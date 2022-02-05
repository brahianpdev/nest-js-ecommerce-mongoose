import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async create(
    @Res() res,
    @Body() createUserDto: CreateUserDTO,
  ): Promise<User> {
    try {
      const user = await this.userService.create(createUserDto);
      return res.status.HttpStatus(HttpStatus.OK).json({
        message: 'User created successfully',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll(@Res() res): Promise<User[]> {
    try {
      const users = await this.userService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Users obtained successfully',
        users,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':userID')
  async findById(@Res() res, @Param('userID') userID): Promise<User> {
    try {
      const user = await this.userService.findUserById(userID);
      return res.status(HttpStatus.OK).json({
        message: 'User obtained successfully ',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':userID')
  async update(
    @Res() res,
    @Param('userID') userID,
    @Body() updateUserDTO: CreateUserDTO,
  ): Promise<User> {
    try {
      const user = await this.userService.updateUser(userID, updateUserDTO);
      return res.status(HttpStatus.OK).json({
        message: 'User update successfully',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':userID')
  async delete(
    @Res() res,
    @Param('userID') userID: string,
    @Body() updateUserDTO: CreateUserDTO,
  ): Promise<User> {
    try {
      const user = await this.userService.deleteUSer(userID, updateUserDTO);
      return res.status(HttpStatus.OK).json({
        message: 'User removed successfully',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
