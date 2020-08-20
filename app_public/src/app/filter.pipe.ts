import { Pipe, PipeTransform } from '@angular/core';
import {Location} from './location'
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  // transform(locations: Location[], searchText: string): any[] {

    // if (!locations) {
    //   return [];
    // }
    // if (!searchText) {
    //   return locations;
    // }
  //   searchText = searchText.toLocaleLowerCase();

  //   return locations.filter(location => {
  //     console.log(location)

  //     return location.name.toLocaleLowerCase().includes(searchText);

  //   });
  // }
    transform(locations: Location[], searchText: string): Location[] {
      console.log(locations)
            
      searchText = searchText.toLocaleLowerCase();
      console.log(searchText)

      return locations.filter(location => {
        location.name.startsWith('*');
        console.log(location.name.toLocaleLowerCase().includes(searchText));
        console.log(location.name);
        // console.log(searchText);
      
      });
  }
}