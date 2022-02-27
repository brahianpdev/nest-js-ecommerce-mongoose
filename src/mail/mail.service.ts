import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>',
      subject: 'Welcome to ML Clon Ecommerce App! Confirm your Email',
      template: 'confirmation',
      context: {
        name: user.username,
        url,
      },
    });
  }
}
