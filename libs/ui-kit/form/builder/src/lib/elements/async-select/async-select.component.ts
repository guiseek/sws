import { Component, OnInit } from '@angular/core';
import { ElementBase } from '../element-base';

@Component({
  selector: 'sws-async-select',
  templateUrl: './async-select.component.html',
  styles: []
})
export class AsyncSelectComponent extends ElementBase implements OnInit {
  constructor() {
    super();
    console.log(this.field);
  }
  ngOnInit() {
    console.log(this.field);
  }
}
