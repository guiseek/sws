import {
  Component,
  OnInit
} from '@angular/core';
import { ICompany, IProject } from '@sws/api-interfaces';
import {
  companyProjectsTable,
  CreateProjectComponent
} from '@sws/organization/shared/company';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncTableResource } from '@sws/ui-kit/table/async-table';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '@sws/shared/utils';

@Component({
  selector: 'org-company-projects',
  templateUrl: './company-projects.component.html',
  styleUrls: ['./company-projects.component.scss']
})
export class CompanyProjectsComponent implements OnInit {
  company: ICompany;

  table: AsyncTableResource
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HttpService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    const { id, ...company } = this.route.snapshot.parent.data.company
    this.company = { id, ...company }
    this.table = companyProjectsTable(id, {
      clickable: true,
      editable: true,
      deletable: true,
      paginator: {
        pageSize: 2
      }
    })

    // this.table.behavior.rowClicked.subscribe((row) => {
    //   console.log('row: ', row)
    //   // this.router.navigate(['..','projeto', row.id], { relativeTo: this.route })
    // })
  }
  onClicked(row) {
    console.log(row)
    this.router.navigate(['..', 'projeto', row.id], { relativeTo: this.route })
  }
  onEdited(row) {
    console.table(row)
  }
  onDeleted(row) {
    console.table(row)
    this.dialogService.openConfirm({
      message: `Tem certeza que deseja remover ${row.name}?`,
      color: 'warn'
    }).afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.service.delete(
          `/api/companies/${row.companyId}/projects/${row.id}`
        ).subscribe((res) => {
          console.log(res)
          this.onRefresh()
        })
      }
    })
  }
  onRefresh() {
    this.table.behavior.refresh.next(true)
  }
  onCreateProject() {
    const ref = this.dialogService.open(
      CreateProjectComponent, {
      withShell: true,
      header: { title: 'Criar projeto' },
      data: {
        company: this.company,
        companyId: this.company.id
      },
      draggable: true
    })
    const sub = ref.afterClosed()
      .subscribe((result) => {
        if (result) {
          this.onRefresh()
          sub.unsubscribe()
        }
      })
  }
}
