import * as dotenv from 'dotenv';
dotenv.config();

const { MONGO_URL, SECRET_KEY, PORT } = process.env;

export const config = {
  mongoURL: MONGO_URL,
  jwt: SECRET_KEY,
  port: PORT,
};
