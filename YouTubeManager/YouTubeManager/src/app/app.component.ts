import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YouTubeManager';
  videos: any[] = [];
  private unsubscribe$: Subject<any> = new Subject();
  constructor(private youTubeService: YoutubeService) { }

  ngOnInit() {
    setTimeout(() =>
    {

    }, 3000)
    this.videos = [];
    this.youTubeService.getVideosForChannel('', 15)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
        })
  }
}
