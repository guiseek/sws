import { Component, OnInit } from '@angular/core';
import { CompanyService, ProjectService } from '@sws/organization/shared/company';
import { swsAnimations } from '@sws/shared/utils';

@Component({
  selector: 'org-project-shell',
  templateUrl: './project-shell.component.html',
  styleUrls: ['./project-shell.component.scss'],
  animations: swsAnimations
})
export class ProjectShellComponent implements OnInit {
  navLinks = [
    {
      path: 'usuarios',
      label: 'Usuários'
    },
    {
      path: 'dashboard',
      label: 'Dashboard'
    }
  ];
  constructor(
    private companyService: CompanyService,
    private service: ProjectService
  ) { }

  ngOnInit() {
    console.log(
      this.companyService.company
    )
    console.log(
      'project', this.service.project
    )
    // this.service.myProjects()
    //   .subscribe((data) => {
    //     console.log(data)
    //   })
  }

}
