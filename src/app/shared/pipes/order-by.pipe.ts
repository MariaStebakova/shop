import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';//  _ from "lodash";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[] | null, key: string, isAsc: boolean = false): any[] | null {
    const sortOrder = isAsc ? 'asc' : 'desc';
    if (!key) {
      return array;
    }

    return orderBy(array, [key], [sortOrder]);
  }

}
