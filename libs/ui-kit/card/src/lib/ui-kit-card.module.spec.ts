import { async, TestBed } from '@angular/core/testing';
import { UiKitCardModule } from './ui-kit-card.module';

describe('UiKitCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitCardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitCardModule).toBeDefined();
  });
});
