import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '@sws/shared/utils';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, filter, switchMap, debounceTime } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { AsyncCompleteConfig } from '../interfaces/async-complete-config.interface';
import { asyncCompleteConfig } from '../configs/async-complete.config';

@Component({
  selector: 'sws-async-complete',
  templateUrl: './async-complete.component.html',
  styleUrls: ['./async-complete.component.scss']
})
export class AsyncCompleteComponent implements OnInit {
  control = new FormControl('', [
    Validators.required
  ])
  filteredOptions: Observable<any[]>

  @Input() config: AsyncCompleteConfig


  @Output() optionSelected = new EventEmitter()

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.config = Object.assign({}, asyncCompleteConfig, this.config)
    this.filteredOptions = this.control.valueChanges
      .pipe(
        startWith(''),
        filter(value => this.config.regex ? this.config.regex.test(value) : value.length > 2),
        map(value => typeof value === 'string' ? value : value[this.config.viewValue]),
        debounceTime(this.config.debounce),
        switchMap(value => this._search(value)),
      )
  }
  onSelect({ option }: MatAutocompleteSelectedEvent) {
    console.log('option: ', option)
    this.optionSelected.emit(option.value)
  }
  displayFn(value?): string | undefined {
    console.log('value: ', this.config, value)
    if (value && this.config) {
      return this.config.viewValue ? value[this.config.viewValue] : value
    } else {
      return undefined
    }
  }
  private _search(value: string = ''): Observable<any[]> {
    return this.http.read<any>('/api/users', {
      filter: [{
        field: this.config.field, operator: 'eq', value
      }]
    })
  }
}
