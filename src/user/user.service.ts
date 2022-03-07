import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDTO } from './dto/register-user.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async UploadAvatarToCloudinary(file: Express.Multer.File) {
    try {
      return await this.cloudinaryService.uploadImage(file);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(username: string): Promise<User> {
    try {
      return await this.userModel.findOne({ username });
    } catch (error) {
      throw new Error(error);
    }
  }

  private hashPassword(password, salt): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findUserById(userID: string): Promise<User> {
    try {
      const user = await this.userModel.findById(userID);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NO_CONTENT);
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(
    userID: string,
    updateUserDTO: UpdateUserDTO,
  ): Promise<User> {
    try {
      const { password } = updateUserDTO;

      const salt = await bcrypt.genSalt();
      const hashPassword = await this.hashPassword(password, salt);
      updateUserDTO.password = hashPassword;

      const user = await this.userModel.findByIdAndUpdate(
        userID,
        updateUserDTO,
        { new: true },
      );

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUSer(userID: string): Promise<User> {
    try {
      const user = await this.userModel.findByIdAndUpdate(userID, {
        state: false,
      });

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
