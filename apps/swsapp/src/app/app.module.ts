import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountSharedAuthModule, TokenInterceptor } from '@sws/account/shared/auth';
import { UserCompanyGuard } from '@sws/account/shared/user';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AccountSharedAuthModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () =>
          import('@sws/account/feature/auth').then(
            module => module.AccountFeatureAuthModule
          )
      },
      {
        path: 'organizacao',
        canActivate: [UserCompanyGuard],
        loadChildren: () =>
          import('@sws/organization/feature/shell').then(
            module => module.OrganizationFeatureShellModule
          )
      },
      {
        path: 'conta',
        canActivate: [UserCompanyGuard],
        loadChildren: () =>
          import('@sws/account/feature/shell').then(
            module => module.AccountFeatureShellModule
          )
      },
      {
        path: '',
        redirectTo: 'conta',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/auth'
      }
    ]),
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
