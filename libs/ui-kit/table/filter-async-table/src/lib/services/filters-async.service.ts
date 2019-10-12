import { Injectable } from '@angular/core';
import { DialogService } from '@sws/ui-kit/floating/dialog';
import { FiltersComponent } from '../components/filters/filters.component';

@Injectable()
export class FiltersAsyncService {

  constructor(
    private dialogService: DialogService
  ) { }

  openFilters<T = any>(fields) {
    return this.dialogService.open<T>(
      FiltersComponent, {
        data: { fields }
      }
    )
  }
}
