import { Component, OnInit } from '@angular/core';
import { CompanyService, ProjectService } from '@sws/organization/shared/company';

@Component({
  selector: 'org-project-shell',
  templateUrl: './project-shell.component.html',
  styleUrls: ['./project-shell.component.scss']
})
export class ProjectShellComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    private service: ProjectService
  ) { }

  ngOnInit() {
    console.log(
      this.companyService.company
    )
    this.service.myProjects()
      .subscribe((data) => {
        console.log(data)
      })
  }

}
