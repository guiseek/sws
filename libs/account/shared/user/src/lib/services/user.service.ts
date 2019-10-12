import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, ICompany } from '@sws/api-interfaces';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  getMany() {
    return this.http.get<IUser[]>('/api/users')
  }
  getOne(id: number) {
    return this.http.get<IUser>(`/api/users/${id}`)
  }
  createOne(user: IUser) {
    return this.http.post('/api/users', user)
  }
  updateOne(user: Partial<IUser>) {
    return this.http.put(`/api/users/${user.id}`, user)
  }
  deleteOne(id: number) {
    return this.http.delete(`/api/users/${id}`)
  }
  addCompany(userId: number, company: Partial<ICompany>) {
    return this.http.put(`/api/users/${userId}`, { company })
  }
}
