import { async, TestBed } from '@angular/core/testing';
import { AccountFeatureShellModule } from './account-feature-shell.module';

describe('AccountFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountFeatureShellModule).toBeDefined();
  });
});
