import { Component, OnInit } from '@angular/core';
import { swsAnimations } from '@sws/shared/utils';
import { Router } from '@angular/router';
import { AuthService } from '@sws/account/shared/auth';
import { DialogService } from '@sws/ui-kit/floating/dialog';

@Component({
  selector: 'sws-onboard-user',
  templateUrl: './onboard-user.component.html',
  styleUrls: ['./onboard-user.component.scss'],
  animations: [swsAnimations]
})
export class OnboardUserComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit() {}

  onUpped(data) {
    console.log(data)
    this.router.navigate(['/auth'], {
      queryParams: {
        returnTo: '/auth/embarque/empresa'
      }
    })
  }
}
