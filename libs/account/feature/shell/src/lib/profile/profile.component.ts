import { Component, OnInit } from '@angular/core';
import { AuthService } from '@sws/account/shared/auth';
import { accountProfileForm } from '@sws/account/shared/user';

@Component({
  selector: 'sws-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm = accountProfileForm
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}
}
