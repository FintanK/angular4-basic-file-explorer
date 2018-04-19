import { Pipe, PipeTransform } from '@angular/core';
import {File} from '../types/File';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: File[], term): any {
    if (term && term.length && items && items.length) {
      console.log('term', term);

      return term
        ? items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)
        : items;
    } else {
      return items;
    }
  }
}
