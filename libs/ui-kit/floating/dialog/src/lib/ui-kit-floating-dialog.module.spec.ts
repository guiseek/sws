import { async, TestBed } from '@angular/core/testing';
import { UiKitFloatingDialogModule } from './ui-kit-floating-dialog.module';

describe('UiKitFloatingDialogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitFloatingDialogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitFloatingDialogModule).toBeDefined();
  });
});
