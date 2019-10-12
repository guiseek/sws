import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatSnackBarModule
} from '@angular/material';
import { UserService } from './services/user.service';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';
import { RouterModule } from '@angular/router';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    CommonModule,
    AccountSharedAuthModule,
    ...modules,
    RouterModule
  ],
  declarations: [ToolbarMenuComponent],
  providers: [UserService],
  exports: [ToolbarMenuComponent]
})
export class AccountSharedUserModule {}
