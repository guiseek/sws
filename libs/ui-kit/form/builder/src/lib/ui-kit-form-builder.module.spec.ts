import { async, TestBed } from '@angular/core/testing';
import { UiKitFormBuilderModule } from './ui-kit-form-builder.module';

describe('UiKitFormBuilderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitFormBuilderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitFormBuilderModule).toBeDefined();
  });
});
