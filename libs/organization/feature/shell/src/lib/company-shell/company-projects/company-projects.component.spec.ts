import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProjectsComponent } from './company-projects.component';

describe('CompanyProjectsComponent', () => {
  let component: CompanyProjectsComponent;
  let fixture: ComponentFixture<CompanyProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
