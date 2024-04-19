import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube01',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './youtubevideos/youtube01.component.html',
  styleUrl: './youtube01.component.css'
})
export class Youtube01Component {
  //  videoUrl = 'https://www.youtube.com/watch?v=QIZ9aZD6vs0'

apiLoaded = false;

videoId = '9MwAEleQuSw';
height = 200;
width = 400;

startSeconds = 60;
endSeconds = 120;

ngOnInit() {
  if (!this.apiLoaded) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.apiLoaded = true;
  }
}

}
