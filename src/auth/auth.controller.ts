import {
  Controller,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Res() res, @Request() req) {
    const userToken = await this.authService.login(req.user);
    return res.status(HttpStatus.OK).json({
      message: 'User logged in successfully',
      userToken,
    });
  }
}
