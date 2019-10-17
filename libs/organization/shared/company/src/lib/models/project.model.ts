import { ICompany, IProject, IUser, IUserProject } from '@sws/api-interfaces';
import { validator } from '@sws/shared/utils';
import { plainToClass, classToPlainFromExist, plainToClassFromExist, serialize } from 'class-transformer';

export class Project {
  id?: number
  name: string
  description?: string
  private _company?: ICompany
  companyId: Number
  users?: IUser[]
  isActive = true
  userProjects?: IUserProject[]

	constructor() {
	}


  @validator
  set company(value: ICompany) {
    console.log(value)
    this.companyId = value.id
    this._company = value
  }
  get company() {
    return this._company
  }

  patchValue(value: IProject) {
    return plainToClass(Project, value, {
      excludePrefixes: ["", "__"]
    })
  }
  toJson(value?: IProject) {
    return serialize(this)
  }
}