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

}
