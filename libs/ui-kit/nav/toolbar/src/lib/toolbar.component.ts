import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'sws-toolbar',
  templateUrl: './toolbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    sws-toolbar { display: block; height: 50px; }
    .sws-toolbar { position: fixed; }
    .sws-toolbar.mat-toolbar-single-row { height: 50px }
    .sws-toolbar > * { height: 100%; }
  `]
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() iconHome: {
    icon: string;
    link: string;
  };
  @Input() search: boolean;
  @Output() searchChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  onSearchChange(event) {
    this.searchChange.emit(event);
  }
}
