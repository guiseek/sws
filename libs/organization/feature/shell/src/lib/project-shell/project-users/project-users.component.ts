import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '@sws/organization/shared/company';
import { HttpService, swsAnimations } from '@sws/shared/utils';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { PopoverService } from '@sws/ui-kit/floating/popover';
import { PopoverMenuComponent } from '@sws/account/shared/user';

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

@Component({
  selector: 'org-project-users',
  templateUrl: './project-users.component.html',
  styleUrls: ['./project-users.component.scss'],
  animations: swsAnimations
})
export class ProjectUsersComponent implements OnInit {

  searchConfig = {
    field: 'email',
    viewValue: 'email',
    regex: EMAIL_REGEXP
  }
  
  project: Project
  constructor(
    private http: HttpService,
    private service: ProjectService,
    private dialogService: DialogService,
    private popoverService: PopoverService
  ) { }

  ngOnInit() {
    this.project = this.service.project
    console.log(
      this.service.project
    ) 
  }
  onSelectUser(user) {
    console.log(user)
    this.service.project.addUser(user)
  }
  onDelete(user) {
    console.log(user)
    const ref = this.dialogService.openDelete()
    const sub = ref.afterClosed().subscribe((res) => {
      console.log(res)
      sub.unsubscribe()
    })
  }
  onPopover(user, target) {
    const ref = this.popoverService.open(
      PopoverMenuComponent, target, {
        data: user
      }
    )
  }
  onSave() {
    this.service.updateOne(
      this.project
    ).subscribe((console.log))
  }
}
