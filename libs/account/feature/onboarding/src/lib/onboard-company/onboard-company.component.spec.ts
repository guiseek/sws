import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardCompanyComponent } from './onboard-company.component';

describe('OnboardCompanyComponent', () => {
  let component: OnboardCompanyComponent;
  let fixture: ComponentFixture<OnboardCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardCompanyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
