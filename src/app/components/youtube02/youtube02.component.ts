import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube02',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './youtube02.component.html',
  styleUrl: './youtube02.component.css'
})
export class Youtube02Component {
//  videoUrl = 'https://www.youtube.com/watch?v=QIZ9aZD6vs0'

apiLoaded = false;

videoId = 'eIaG5A0IG50';
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
