import { Component, OnInit, ViewEncapsulation, HostBinding, ContentChildren, QueryList, Renderer2, ElementRef, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { FlipDirective } from './flip.directive';

@Component({
  selector: 'card-flip',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./flip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'cardFlip'
})
export class FlipComponent implements AfterContentInit {
  @HostBinding('class.flipped')
  flipped = false;

  @ContentChildren(FlipDirective, { descendants: true })
  toggleButtons: QueryList<FlipDirective>;

  @Output() flip = new EventEmitter()

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngAfterContentInit(): void {
    console.log('dir: ', this.toggleButtons)
    setTimeout(() => {
      this.toggleButtons.forEach(flipButton => {
        this._renderer.listen(flipButton.elementRef.nativeElement, 'click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.toggle();
          console.log('toggle')
        });
      });
    });
  }
  toggle(): void {
    const flip = !this.flipped;
    this.flipped = flip;
    this.flip.emit(flip)
    console.log(flip)
  }
}
