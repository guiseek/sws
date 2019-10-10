import { ormConfig } from '../orm.config';
import { User, UserProfile } from 'api/users';

export const environment = {
  production: true,
  ormConfig: ormConfig({
    database: 'seek-workspace',
    entities: [User, UserProfile]
  })
};
