import { Component, OnInit } from '@angular/core';
import { swsAnimations } from '@sws/shared/utils';

@Component({
  selector: 'sws-onboard-company',
  templateUrl: './onboard-company.component.html',
  styleUrls: ['./onboard-company.component.scss'],
  animations: [
    swsAnimations
  ]
})
export class OnboardCompanyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
