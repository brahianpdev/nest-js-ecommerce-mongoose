import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async create(
    @Res() res,
    @Body() createUserDtO: CreateUserDTO,
  ): Promise<User> {
    try {
      const user = await this.userService.createUser(createUserDtO);
      return res.json({
        message: 'User created successfully',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() res): Promise<User[]> {
    try {
      const users = await this.userService.findAll();
      return res.json({
        message: 'Users obtained successfully',
        users,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userID')
  async findById(@Res() res, @Param('userID') userID): Promise<User> {
    try {
      const user = await this.userService.findUserById(userID);
      return res.json({
        message: 'User obtained successfully ',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':userID')
  async update(
    @Res() res,
    @Param('userID') userID,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<User> {
    try {
      const user = await this.userService.updateUser(userID, updateUserDTO);
      return res.json({
        message: 'User update successfully',
        user,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userID')
  async delete(@Res() res, @Param('userID') userID: string): Promise<User> {
    try {
      const user = await this.userService.deleteUSer(userID);
      return res.json({
        message: 'User removed successfully',
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
