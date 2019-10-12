import { IUser } from './user.interface';
import { IProject } from './project.interface';

export interface ICompany {
  id: number;
  name: string;
  domain: string;
  description: string;
  /**
   * Relations
   */
  users: IUser[];
  projects: IProject[];
}
