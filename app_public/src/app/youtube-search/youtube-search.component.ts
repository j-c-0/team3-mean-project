import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  constructor(
    private youtube:YoutubeService
  ) { }
  
  channels:any;
  @ViewChild('channelName')ChannelName:ElementRef;

  ngOnInit(): void {
    this.youtube.getChannels("Programming").subscribe((data)=>{
      console.log(data)
      this.channels =data.items;
    })
  }
  getData(){
    var channelName=this.ChannelName.nativeElement.value;

    this.youtube.getChannels(channelName).subscribe((data)=>{
      console.log(data)
      this.channels =data.items;
    })
  }
}
