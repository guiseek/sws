import { async, TestBed } from '@angular/core/testing';
import { AccountFeatureOnboardingModule } from './account-feature-onboarding.module';

describe('AccountFeatureOnboardingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountFeatureOnboardingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountFeatureOnboardingModule).toBeDefined();
  });
});
