import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[] | null, key: string, isAsc: boolean = false): any[] | null {
    const sortOrder = isAsc ? 'asc' : 'desc';
    if (!key) {
      return array;
    }
    
    return _.orderBy(array, [key], [sortOrder]);
  }

}
