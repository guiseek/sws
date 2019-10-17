import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'org-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
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
