import { Component, OnInit } from '@angular/core';
import { HttpService } from '@sws/shared/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'sws-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [
    HttpService
  ]
})
export class OverviewComponent implements OnInit {
  users$: Observable<any[]>
  constructor(
    private service: HttpService
  ) { }

  ngOnInit() {
    this.users$ = this.service.read(
      '/api/users'
    )
  }

}
