import { async, TestBed } from '@angular/core/testing';
import { UiKitFloatingPopoverModule } from './ui-kit-floating-popover.module';

describe('UiKitFloatingPopoverModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitFloatingPopoverModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitFloatingPopoverModule).toBeDefined();
  });
});
