import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '@sws/api-interfaces';
import { AuthService, ForgotPasswordComponent, PasswordResetComponent } from '@sws/account/shared/auth';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { DialogService } from '@sws/ui-kit/floating/dialog';

@Component({
  selector: 'account-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {
  // @Input() user: IUser
  @Input() options
  user$: Observable<IUser>
  constructor(
    private authService: AuthService,
    private dialogService: DialogService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.authService.info()
  }
  changePassword() {
    console.log(
      this.authService.user
    )
    const ref = this.dialogService.open(
      ForgotPasswordComponent, {
      header: { title: 'Alterar senha' },
      withShell: true,
      data: {
        email: this.authService.user.email
      }
    })
    const sub = ref.afterClosed().subscribe(result => {
      if (result) {
        this.openAlert()
      }
      sub.unsubscribe()
    })
  }
  logout() {
    this.authService.logout()
  }
  openAlert() {
    const ref = this.dialogService.openAlert({
      type: 'info',
      message: 'Copie o código enviado e volte para configurar sua nova senha, ok?'
    })

    const sub = ref.afterClosed()
      .subscribe((result) => {
        sub.unsubscribe()
        if (result) {
          this.openResetPassword()
        }
      })
  }
  openResetPassword() {
    const ref = this.dialogService.open(
      PasswordResetComponent, {
      withShell: true,
      header: {
        title: 'Nova senha',
        subtitle: 'Use o código recebido no email'
      }
    })
    const sub = ref.afterClosed().subscribe(result => {
      console.log('result: ', result)
      sub.unsubscribe()
    })
  }
}
