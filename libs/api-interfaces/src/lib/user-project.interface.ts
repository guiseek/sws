import { IProject } from './project.interface';
import { IUser } from './user.interface';

export interface IUserProject {
  projectId: number;
  userId: number;
  review: string;
  project: IProject;
  user: IUser;
}
