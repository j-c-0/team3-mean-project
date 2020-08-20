import { Pipe, PipeTransform } from '@angular/core';
import {Location} from './location'
@Pipe({
  name: 'filter'
  
})
export class FilterPipe implements PipeTransform {
  // transform(item: any[], searchText: string): any[] {

  //   if (!item) {
  //     return [];
  //   }
  //   if (!searchText) {
  //     return item;
  //   }
  //   searchText = searchText.toLocaleLowerCase();

  //   return item.filter(it => {
  //     return it.toLocaleLowerCase().includes(searchText);
  //   });
  // }
    transform(value: any[], searchText: string): any[] {

    return value.filter(item => {
      item.name.startsWith('r');
      console.log(item.name);
      console.log(searchText);
      
    });
  }
}