import { async, TestBed } from '@angular/core/testing';
import { AsyncTableModule } from './async-table.module';

describe('AsyncTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AsyncTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AsyncTableModule).toBeDefined();
  });
});
