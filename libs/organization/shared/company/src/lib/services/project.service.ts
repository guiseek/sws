import { Injectable } from '@angular/core';
import { HttpService } from '@sws/shared/utils';
import { IProject } from '@sws/api-interfaces';
import { tap } from 'rxjs/operators';
import { Project } from '../models';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ProjectService {
  private api = '/api/my-projects';
  private _project: Project

  constructor(
    private httpService: HttpService
  ) { }

  public get project(): Project {
    return this._project
  }

  myProjects() {
    return this.httpService.get(
      this.api
    )
  }
  getMany() {
    return this.httpService.get<IProject[]>('/api/companies')
  }
  getOne(id: number) {
    return this.httpService.get<IProject>(`/api/companies/${id}/projects`)
      .pipe(
        tap((project) => {
          this._project = plainToClass(Project, project)
        })
      )
  }
  createOne(project: IProject) {
    return this.httpService.post(`/api/companies/${project.companyId}/projects`, project)
  }
  updateOne(project: Partial<IProject>) {
    return this.httpService.put(`/api/companies/${project.companyId}/projects`, project)
  }
  deleteOne(id: number) {
    return this.httpService.delete(`/api/companies/${id}/projects`)
  }
  addProject(project: IProject) {
    return this.httpService.put(`/api/companies/${project.companyId}/projects`, project)
  }
}
