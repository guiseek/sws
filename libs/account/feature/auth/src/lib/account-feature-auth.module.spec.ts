import { async, TestBed } from '@angular/core/testing';
import { AccountFeatureAuthModule } from './account-feature-auth.module';

describe('AccountFeatureAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountFeatureAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountFeatureAuthModule).toBeDefined();
  });
});
