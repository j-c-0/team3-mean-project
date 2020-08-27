import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }
  getChannels(channelName):Observable<any>{
    // const API_KEY="AIzaSyA___1PHslQAe1hkJFjV3V7euIuk4T72II";
    const API_KEY="AIzaSyB51goP5NlIvQ9ou-HfYOefj2hA6m37cj8";
    const url ="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&type=channel&key="+API_KEY+"&maxResults=2"
    return this.http.get<any>(url);
  }
}
