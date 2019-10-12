import { TestBed } from '@angular/core/testing';

import { FilterAsyncService } from './filter-async.service';

describe('FilterAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterAsyncService = TestBed.get(FilterAsyncService);
    expect(service).toBeTruthy();
  });
});
