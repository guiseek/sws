import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { accountProfileForm } from '../../forms';

@Component({
  selector: 'account-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() parentForm: FormGroup
  form: FormGroup
  constructor(
    private fb: FormBuilder
  ) {
    if (!this.parentForm) {
      this.parentForm = accountProfileForm
    }
  }

  ngOnInit() {
  }

}
