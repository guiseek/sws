import { Pipe, PipeTransform } from '@angular/core';
import { condOperatorReadable } from '../config/filter-conditions.config';

@Pipe({
  name: 'condOperatorReadable'
})
export class CondOperatorReadablePipe implements PipeTransform {

  transform(value: any, key?: string): string {
    return condOperatorReadable[value]
  }

}
