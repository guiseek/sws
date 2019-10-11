import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PortalModule } from '@angular/cdk/portal';

const modules = [
  PortalModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  imports: [CommonModule, RouterModule, ...modules],
  declarations: [ToolbarComponent, SearchBarComponent],
  exports: [ToolbarComponent]
})
export class UiKitNavToolbarModule {}
