import { Component, OnInit, HostBinding } from '@angular/core';
import { IceCreamComponent, ProjectSchema } from '@sws/organization/shared/schema';

@Component({
  selector: 'org-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  // company = new CompanySchema()
  @HostBinding('class.bg-win-sun')
  bgClass = true;
  
  project = new ProjectSchema()
  iceCream = new IceCreamComponent()
  constructor() { }

  ngOnInit() {

    // project.
    console.log(
      this.project.elements
    )
    console.log(
      this.iceCream.flavor
    )
  }

}
