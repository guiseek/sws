import { async, TestBed } from '@angular/core/testing';
import { OrganizationSharedCompanyModule } from './organization-shared-company.module';

describe('OrganizationSharedCompanyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrganizationSharedCompanyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrganizationSharedCompanyModule).toBeDefined();
  });
});
