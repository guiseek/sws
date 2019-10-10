import { ormConfig } from '../orm.config';
import { User, UserProfile } from 'api/users';
import { Company } from 'org/companies';
import { Project, UserProject } from 'org/projects';

export const environment = {
  production: false,
  ormConfig: ormConfig({
    database: 'seek_workspace',
    entities: [User, UserProfile, Company, Project, UserProject]
  })
};
