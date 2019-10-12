import { Component, OnInit, Inject, Optional } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@sws/ui-kit/floating/dialog';
import { FilterAsyncService } from '../../services/filter-async.service';

@Component({
  selector: 'sws-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters = []
  constructor(
    public ref: DialogRef,
    private filterService: FilterAsyncService,
    @Optional() @Inject(DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data)
  }
  addFilter() {
    const ref = this.filterService.openFilter(
      this.data.fields
    )
    const sub =  ref.afterClosed().subscribe((filter) => {
      if (filter) {
        console.log('filter: ', filter)
        this.filters.push(filter)
        sub.unsubscribe()
      }
    })
  }
  exec() {
    this.ref.emitAction(
      this.filters
    )
  }
  onConfirm() {
    this.ref.close(
      this.filters
    )
  }
}
