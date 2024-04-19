import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, VideoComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('video') video?: ElementRef;

  toggleVideo(){
    const video: HTMLVideoElement = this.video?.nativeElement;
    video.paused ? video.play() : video.pause();
  }

}
