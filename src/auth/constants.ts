import { configEnvs } from 'src/config';

export const jwtConstants = {
  secret: configEnvs.jwt,
};
