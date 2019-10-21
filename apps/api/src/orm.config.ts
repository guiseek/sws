import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const ormConfig = (config = {}): TypeOrmModuleOptions => {
  return Object.assign(
    {},
    {
      type: 'postgres',
      host: '127.0.0.1',
      port: 5455,
      username: 'sws',
      password: 'sws!@#pg',
      database: 'seek_workspace',
      synchronize: true,
      logging: true,
      cache: {
        type: 'redis',
        options: {
          host: '127.0.0.1',
          port: 6399
        }
      }
      // entities: [join(__dirname, './**/*.entity{.ts,.js}')],
    },
    config
  ) as TypeOrmModuleOptions;
};
