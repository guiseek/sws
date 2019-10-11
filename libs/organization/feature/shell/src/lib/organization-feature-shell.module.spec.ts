import { async, TestBed } from '@angular/core/testing';
import { OrganizationFeatureShellModule } from './organization-feature-shell.module';

describe('OrganizationFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrganizationFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrganizationFeatureShellModule).toBeDefined();
  });
});
