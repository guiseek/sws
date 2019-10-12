import { Injectable } from '@angular/core';
import { HttpService } from '@sws/shared/utils';

@Injectable()
export class ProjectService {
  constructor(private httpService: HttpService) {}
}
