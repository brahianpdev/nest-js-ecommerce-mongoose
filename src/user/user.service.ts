import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO, UpdateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private mailService: MailService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async UploadAvatarToCloudinary(file: any) {
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

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    try {
      const { username, password, email } = createUserDTO;

      const salt = await bcrypt.genSalt();

      const userExist = await this.findOne(username);

      if (userExist) {
        throw new ConflictException('Username already exist');
      }

      const user = new this.userModel(createUserDTO);

      user.username = username;
      user.email = email;
      user.password = await this.hashPassword(password, salt);

      const token = Math.floor(1000 + Math.random() * 9000).toString();
      await this.mailService.sendUserConfirmation(user, token);

      return await user.save();
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
