import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Loc8rDataService } from "../loc8r-data.service";
import { GeolocationService } from "../geolocation.service";
import {YoutubeService} from '../youtube.service';
import { Location } from '../location';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(
    private loc8rDataService: Loc8rDataService,
    private geolocationService: GeolocationService,
    private youtube:YoutubeService 
  ) { }

  public locations: Location[];

  public message: string;

  channels:any;
  @ViewChild('channelName')ChannelName:ElementRef;

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    this.loc8rDataService
      .getLocations(lng, lat)
        .then(foundLocations => {
          this.message = foundLocations.length > 0 ? '' : 'No locations found';
          this.locations = foundLocations;
        });
  };

  private getPosition(): void {
    this.message = 'Getting your location ...';
    this.geolocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this)
    )
  };

  private showError (error: any): void {
    this.message = error.message;
  };

  private noGeo(): void {
    this.message = 'Geolocation not supported in this browser.';
  };
  
  ngOnInit(): void {
    this.youtube.getChannels("Programming").subscribe((data)=>{
      console.log(data)
      this.channels =data.items;
    })
    this.getPosition();
  }
  getData(){
    var channelName=this.ChannelName.nativeElement.value;

    this.youtube.getChannels(channelName).subscribe((data)=>{
      console.log(data)
      this.channels =data.items;
    })
  }
}