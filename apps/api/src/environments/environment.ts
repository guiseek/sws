import { ormConfig } from '../orm.config';
import { User, UserProfile } from 'api/users';
import { Company } from 'org/companies';
import { Project, UserProject } from 'org/projects';
import { License, UserLicense } from 'org/licenses';

export const environment = {
  production: false,
  ormConfig: ormConfig({
    database: 'seek_workspace',
    entities: [User, UserProfile, Company, Project, UserProject, License, UserLicense]
  }),
  mailer: {
    service: 'gmail',
    auth: {
      user: 'seek.workspace@gmail.com',
      pass: 's33kw0rksp5c3'
    }
  }
};
