import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @ViewChild('video') video?:ElementRef;

  playVideo() {
    const video:HTMLVideoElement = this.video?.nativeElement;
    video.play();
  }

  pauseVideo() {
    const video:HTMLVideoElement = this.video?.nativeElement;
    video.pause();
  }

}
