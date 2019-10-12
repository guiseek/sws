import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@sws/api-interfaces';
import { environment } from '../environments/environment';

@Component({
  selector: 'sws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDev = !environment.production;
  hello$ = this.http.get<Message>('/api/ping');
  constructor(private http: HttpClient) {}
}
