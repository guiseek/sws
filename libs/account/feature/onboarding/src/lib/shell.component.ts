import { Component, OnInit } from '@angular/core';
import { swsAnimations } from '@sws/shared/utils';
import { Router } from '@angular/router';
import { DialogService } from '@sws/ui-kit/floating/dialog';

@Component({
  selector: 'sws-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [swsAnimations]
})
export class ShellComponent implements OnInit {
  
  constructor(
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {}
}
