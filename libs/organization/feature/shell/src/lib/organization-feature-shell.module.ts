import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { UiKitFormBuilderModule } from '@sws/ui-kit/form/builder';

@NgModule({
  imports: [
    CommonModule,
    UiKitFormBuilderModule,
    RouterModule.forChild([{
      path: '', component: ShellComponent
    }])
  ],
  declarations: [ShellComponent]
})
export class OrganizationFeatureShellModule {}
