import { ICompany } from './company.interface';
import { IUser } from './user.interface';

export interface IProject {
  name?: string;
  description?: string;
  isActive?: boolean;
  companyId?: number;
  /**
   * Relations
   */
  company?: ICompany;
  users?: IUser[];
  userProjects: {};
}
