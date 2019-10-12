import { async, TestBed } from '@angular/core/testing';
import { FilterAsyncTableModule } from './filter-async-table.module';

describe('FilterAsyncTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterAsyncTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FilterAsyncTableModule).toBeDefined();
  });
});
