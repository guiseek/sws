import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sws-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  input: string;
  focused: boolean;

  @Output() searchChange = new EventEmitter<string>();

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef<
    HTMLInputElement
  >;
  constructor() {}

  ngOnInit() {
    const searchText$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400)
      )
      .subscribe(console.log);
  }
  openDropdown() {
    this.focused = true;
  }

  closeDropdown() {
    this.focused = false;
  }
}
