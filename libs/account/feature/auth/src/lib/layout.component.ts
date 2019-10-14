import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormElement } from '@sws/ui-kit/form/builder';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { SignupComponent, ForgotPasswordComponent, PasswordResetComponent } from '@sws/account/shared/auth';
import { swsAnimations } from '@sws/shared/utils';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [swsAnimations]
})
export class LayoutComponent implements OnInit {
  resetPasswordElements: FormElement[] = [
    {
      type: 'input',
      inputType: 'email',
      name: 'email',
      label: 'E-mail',
      placeholder: 'Seu e-mail',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Obrigatório'
        },
        {
          name: 'email',
          validator: Validators.email,
          message: 'Email inválido'
        }
      ]
    },
    {
      type: 'checkbox',
      name: 'terms',
      label: 'Concordo com os termos'
    }
  ];
  @ViewChild('resetPassword', { static: true }) resetPassword: TemplateRef<any>;
  private returnTo: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) this.returnTo = returnTo ? returnTo : '/conta'
  }
  onLogged() {
    this.router.navigateByUrl(this.returnTo)
    // this.router.navigate(['/conta']);
  }

  forgotPassword() {
    const ref = this.dialogService.open(
      ForgotPasswordComponent, {
        header: { title: 'Recuperar conta' },
        withShell: true
    });
    const sub = ref.afterClosed().subscribe(result => {
      sub.unsubscribe()
    });
    // const ref = this.dialogService.open(
    //   SignupComponent, {
    //     panelClass: 'bg-liquid-cheese'
    //   }
    // )
  }
  openResetPassword() {
    const ref = this.dialogService.open(
      PasswordResetComponent, {
      header: { title: 'Nova senha' },
      withShell: true
    });
    const sub = ref.afterClosed().subscribe(result => {
      console.log('result: ', result)
      sub.unsubscribe()
    });
  }
}
