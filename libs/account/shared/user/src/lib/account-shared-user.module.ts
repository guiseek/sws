import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { UserService } from './services/user.service';
import { AccountSharedAuthModule } from '@sws/account/shared/auth';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PopoverMenuComponent } from './components/popover-menu/popover-menu.component';
import { UiKitFloatingDialogModule } from '@sws/ui-kit/floating/dialog';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AccountSharedAuthModule,
    UiKitFloatingDialogModule,
    ...modules,
    RouterModule
  ],
  declarations: [ToolbarMenuComponent, ProfileComponent, PopoverMenuComponent],
  providers: [UserService],
  exports: [ToolbarMenuComponent, ProfileComponent, PopoverMenuComponent],
  entryComponents: [ProfileComponent, PopoverMenuComponent]
})
export class AccountSharedUserModule {}
