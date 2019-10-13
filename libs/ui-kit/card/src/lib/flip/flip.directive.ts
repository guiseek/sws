import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cardFlip]'
})
export class FlipDirective {

  constructor(
    public elementRef: ElementRef
  ) { }

}
