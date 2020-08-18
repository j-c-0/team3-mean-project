import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location } from '../location';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private appDataService: Loc8rDataService,
    private route: ActivatedRoute
    ) { }

    public newLocation: Location;

  ngOnInit(): void {
  this.route.paramMap                                              
    .pipe(                                                          
      switchMap((params: ParamMap) => {                             
         let id = params.get('locationId');                         
         return this.appDataService.getLocationById(id);          
       })
    )
    .subscribe((newLocation: Location) => {                         
      this.newLocation = newLocation;
      this.pageContent.header.title = newLocation.name;             
      this.pageContent.sidebar = `${newLocation.name} is on Loc8r
      because it has accessible wifi and space to sit down with
      your laptop and get some work done.`;
    });
}

  public pageContent = {                                           
    header : {
      title : '',
      strapline : ''
    },
    sidebar : ''
  };
}
