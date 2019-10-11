import { Directive, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { FORM_ERRORS } from './configs/tokens';
import { untilDestroy } from '@sws/shared/utils';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[swsFormError] [formControlName], [formControl]',
  exportAs: 'swsError'
})
export class FormErrorDirective implements OnInit, OnDestroy {
  @Input() messages = {};
  public error: string;

  private subs: Subscription[] = [];

  constructor(
    @Inject(FORM_ERRORS) private errors,
    private controlDir: NgControl
  ) {}

  get control() {
    return this.controlDir.control;
  }

  ngOnInit() {
    const merge$ = merge(
      // this.submit$,
      this.control.valueChanges
    ).pipe(
      // debounceTime(this.errorDebounceTime),
      untilDestroy(this)
    );
    const $merge = merge$.subscribe(v => {
      const controlErrors = this.control.errors;
      if (controlErrors) {
        const text = this.getError(this.control.errors);
        this.error = text;
      }
    });
    this.subs.push($merge);
  }
  getError(errors) {
    if (!errors) {
      return;
    }
    const key = Object.keys(errors)[0];
    const defaultErrors = Object.keys(this.errors);
    if (!defaultErrors.includes(key)) {
      return 'err';
    }
    if (!!this.messages && this.messages[key]) {
      return this.messages[key];
    } else {
      return this.errors[key](errors[key]);
    }
  }
  ngOnDestroy() {
    return this.subs && this.subs.forEach(sub => sub.unsubscribe());
  }
}
