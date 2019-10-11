import { async, TestBed } from '@angular/core/testing';
import { UiKitNavToolbarModule } from './ui-kit-nav-toolbar.module';

describe('UiKitNavToolbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitNavToolbarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitNavToolbarModule).toBeDefined();
  });
});
