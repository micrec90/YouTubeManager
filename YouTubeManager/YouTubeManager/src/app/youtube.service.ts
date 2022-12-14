import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = ''; // YouTube API key

  constructor(public http: HttpClient) { }

  getVideosForChannel(channel: string, maxResults: number): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url).pipe(map((res) => { return res;}))

  }
}
