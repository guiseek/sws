import { async, TestBed } from '@angular/core/testing';
import { UiKitSvgViewerModule } from './ui-kit-svg-viewer.module';

describe('UiKitSvgViewerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitSvgViewerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitSvgViewerModule).toBeDefined();
  });
});
