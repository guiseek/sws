import { Component, OnInit } from '@angular/core';
import { ICompany } from '@sws/api-interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'org-company-shell',
  templateUrl: './company-shell.component.html',
  styleUrls: ['./company-shell.component.css']
})
export class CompanyShellComponent implements OnInit {
  company: ICompany;
  navLinks = [
    {
      path: 'projetos',
      label: 'Projetos'
    },
    {
      path: 'configuracoes',
      label: 'Configurações'
    }
  ];
  constructor(private route: ActivatedRoute) {
    this.company = this.route.snapshot.data.company;
    console.log();
  }

  ngOnInit() {}
}
