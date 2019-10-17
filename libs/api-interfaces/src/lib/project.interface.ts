import { ICompany } from './company.interface';
import { IUser } from './user.interface';
import { IUserProject } from './user-project.interface';

export interface IProject {
  name?: String;
  description?: String;
  isActive?: Boolean;
  companyId?: Number;
  /**
   * Relations
   */
  company?: ICompany;
  users?: IUser[];
  userProjects?: IUserProject[];
}
