import { IJwtConfig } from '../interfaces/jwt-config.interface';

export const JWT_CONFIG: IJwtConfig = {
  header: 'Authorization',
  prefix: 'Bearer',
  token: 'access_token',
  storage: 'access_token'
};
export const JWT_CONFIG_TOKEN = 'JwtConfig';
