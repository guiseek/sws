import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@sws/account/shared/auth';
import { take, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserCompanyGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.info().pipe(
        take(1),
        map((user) => {
          if (!user) {
            this.router.navigateByUrl('/auth/embarque/empresa')
            this.snackBar.open('Você ainda não está ligado a nenhuma organização')
          }
          return !!user
        })
      )
        
  }
  
}
