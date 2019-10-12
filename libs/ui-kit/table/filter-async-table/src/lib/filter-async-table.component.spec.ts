import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAsyncTableComponent } from './filter-async-table.component';

describe('FilterAsyncTableComponent', () => {
  let component: FilterAsyncTableComponent;
  let fixture: ComponentFixture<FilterAsyncTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAsyncTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAsyncTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
