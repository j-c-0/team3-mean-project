import { Component, OnInit, Input} from '@angular/core';
import { Location } from '../location';
import { FilterPipe } from '../filter.pipe';
import { HomeListComponent} from '../home-list/home-list.component'
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private filterPipe: FilterPipe,
    private homeListComponent:HomeListComponent
    ) {
    
   }

  public locations: Location[];
   searchText: string;
  ngOnInit(): void {
    
  }
  }