import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UpdateUserDTO } from './dto/register-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    try {
      return this.userService.UploadAvatarToCloudinary(file);
    } catch (error) {
      console.log(error);
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
