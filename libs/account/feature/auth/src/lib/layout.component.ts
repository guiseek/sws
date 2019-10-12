import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormElement } from '@sws/ui-kit/form/builder';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { SignupComponent } from '@sws/account/shared/auth';
import { swsAnimations } from '@sws/shared/utils';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [swsAnimations]
})
export class LayoutComponent implements OnInit {
  formElements: FormElement[] = [
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
  @ViewChild('signUp', { static: true }) signUp: TemplateRef<any>;
  private returnTo: string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) this.returnTo = returnTo ? returnTo : '/conta'
  }
  onLogged() {
    this.router.navigateByUrl(this.returnTo)
    // this.router.navigate(['/conta']);
  }

  openSignUp() {
    const ref = this.dialogService.open(this.signUp, {
      hasBackdrop: false
    });
    const sub = ref.afterClosed().subscribe(result => {
      console.log(result);
      sub.unsubscribe();
    });
    // const ref = this.dialogService.open(
    //   SignupComponent, {
    //     panelClass: 'bg-liquid-cheese'
    //   }
    // )
  }
}
