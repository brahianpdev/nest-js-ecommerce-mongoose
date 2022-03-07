import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ERROR_MESSAGES } from '../shared/ERROR_MESSAGES';

@Injectable()
export class SellerGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user.seller) {
      return true;
    }

    throw new HttpException(
      ERROR_MESSAGES.UNAUTHORIZE,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
