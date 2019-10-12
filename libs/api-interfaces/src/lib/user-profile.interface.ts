import { IUser } from './user.interface';

export interface IUserProfile {
  name: string;
  /**
   * Relations
   */
  user?: IUser;
}
