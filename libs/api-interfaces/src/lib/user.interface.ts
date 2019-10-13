import { IUserProfile } from './user-profile.interface';

export interface IName {
  first: string;
  last: string;
}

export interface IUser {
  id: number;
  email: string;
  confirmationCode: string;
  confirmationTime: any;
  password: string;
  isActive: boolean;
  name: IName;
  profileId?: number;
  /**
   * Relations
   */
  profile?: IUserProfile;
  company?: any;
  projects?: {};
  userProjects?: {};

  createdAt?: Date
  updatedAt?: Date
  createPassword(): void;
  confirmCode(): void;
  hashPassword(password: string): string;
  validatePassword(password: string): boolean;
}
