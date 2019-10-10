import { async, TestBed } from '@angular/core/testing';
import { UiKitFormErrorModule } from './ui-kit-form-error.module';

describe('UiKitFormErrorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitFormErrorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitFormErrorModule).toBeDefined();
  });
});
