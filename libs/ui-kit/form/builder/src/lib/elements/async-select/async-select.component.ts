import { Component, OnInit } from '@angular/core';
import { ElementBase } from '../element-base';
import { HttpClient } from '@angular/common/http';
import { FormElement } from '../../interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'sws-async-select',
  templateUrl: './async-select.component.html',
  styles: []
})
export class AsyncSelectComponent extends ElementBase implements OnInit {
  options$: Observable<any[]>
  constructor(
    private http: HttpClient
  ) {
    super();
    console.log(this.field);
  }
  ngOnInit() {
    console.log(this.field);
    this.options$ = this.getOptions(this.field)
  }
  getOptions({ asyncConfig }: FormElement) {
    return this.http.get(
      asyncConfig.endpoint
    ).pipe(
      map((response: any[]) => {
        return response.map((option) => {
          return {
            value: option[asyncConfig.value],
            viewValue: option[asyncConfig.viewValue]
          }
        })
      })
    )
  }
}
