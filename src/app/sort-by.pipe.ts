import {Pipe, PipeTransform} from '@angular/core';
import {File} from '../types/File';

@Pipe({
  name: 'sortFilesBy'
})
export class SortByPipe implements PipeTransform {
  transform(array: Array<File>, args: string): Array<File> {
    if (array !== undefined) {
      array.sort((a: any, b: any) => {
        if ( a[args] < b[args] ){
          return -1;
        } else if ( a[args] > b[args] ) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return array;
  }
}
