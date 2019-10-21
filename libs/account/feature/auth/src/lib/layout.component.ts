import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { ForgotPasswordComponent, PasswordResetComponent } from '@sws/account/shared/auth';
import { swsAnimations } from '@sws/shared/utils';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [swsAnimations]
})
export class LayoutComponent implements OnInit {
  private returnTo: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) this.returnTo = returnTo ? returnTo : '/conta'
  }
  onLogged() {
    this.router.navigateByUrl(this.returnTo)
  }

  forgotPassword() {
    const ref = this.dialogService.open(
      ForgotPasswordComponent, {
      header: { title: 'Recuperar conta' },
      withShell: true
    })
    const sub = ref.afterClosed().subscribe(result => {
      if (result) {
        this.openAlert()
      }
      sub.unsubscribe()
    })
  }
  openAlert() {
    const ref = this.dialogService.openAlert({
      type: 'info',
      message: 'Acesse seu email, copie o código enviado e volte para configurar sua nova senha, ok?'
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
