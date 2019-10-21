import { async, TestBed } from '@angular/core/testing';
import { UiKitFormSearchModule } from './ui-kit-form-search.module';

describe('UiKitFormSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitFormSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitFormSearchModule).toBeDefined();
  });
});
