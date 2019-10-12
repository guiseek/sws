import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  transition,
  query,
  animate,
  style
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
// import { IceCreamComponent, ProjectSchema } from '@sws/organization/shared/schema';

@Component({
  selector: 'org-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.5s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ShellComponent implements OnInit {
  // company = new CompanySchema()
  // @HostBinding('class.bg-win-sun')
  // bgClass = true;

  // project = new ProjectSchema()
  // iceCream = new IceCreamComponent()
  iconHome = {
    icon: 'home',
    link: '/organizacao'
  };
  titles = [];
  constructor(private route: ActivatedRoute) {
    const { data, children } = this.route.snapshot;
    this.titles.push(data.subtitle);
    children.map(({ data }) => {
      this.titles.push(data.subtitle);
    });
    console.log(this.route.routeConfig);
  }

  ngOnInit() {}
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
