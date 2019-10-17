import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUsersComponent } from './project-users.component';

describe('ProjectUsersComponent', () => {
  let component: ProjectUsersComponent;
  let fixture: ComponentFixture<ProjectUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
