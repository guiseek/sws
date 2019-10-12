import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgViewerComponent } from './svg-viewer.component';
import { SvgViewerService } from './svg-viewer.service';
import { SvgViewerDefaultConfig, SvgViewerConfig } from './svg-viewer.config';

@NgModule({
  imports: [CommonModule],
  declarations: [SvgViewerComponent],
  providers: [
    SvgViewerService,
    { provide: SvgViewerService, useClass: SvgViewerDefaultConfig }
  ],
  exports: [SvgViewerComponent]
})
export class UiKitSvgViewerModule {
  static forRoot(config: SvgViewerConfig): ModuleWithProviders {
    return {
      ngModule: UiKitSvgViewerModule,
      providers: [{ provide: SvgViewerConfig, useValue: config }]
    };
  }
}
