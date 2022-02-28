import * as dotenv from 'dotenv';
dotenv.config();

const {
  MONGO_URL,
  SECRET_KEY,
  PORT,
  MAIL_HOST,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_FROM,
} = process.env;

export const config = {
  mongoURL: MONGO_URL,
  jwt: SECRET_KEY,
  port: PORT,
  mailSMPT: MAIL_HOST,
  mailUser: MAIL_USER,
  mailPassword: MAIL_PASSWORD,
  mailFrom: MAIL_FROM,
};
