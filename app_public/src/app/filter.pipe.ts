import { Pipe, PipeTransform } from '@angular/core';
import {Location} from './location'
@Pipe({
  name: 'filter'
  
})
export class FilterPipe implements PipeTransform {
  transform(location: any[], searchText: string): any[] {

    if (!location) {
      return [];
    }
    if (!searchText) {
      return location;
    }
    searchText = searchText.toLocaleLowerCase();

    return location.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}