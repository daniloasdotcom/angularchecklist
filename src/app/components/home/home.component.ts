import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { VideoComponent } from '../video/video.component';
import { Youtube02Component } from '../youtube02/youtube02.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CollapsibleComponent } from '../collapsible/collapsible.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, VideoComponent, Youtube02Component, YouTubePlayerModule, CollapsibleComponent, FooterComponent],
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

  downloadEbook() {
    // Lógica para baixar o eBook
    // Por exemplo:
    const link = document.createElement('a');
    link.href = './assets/EbookAngularWay.pdf';
    link.download = 'EbookAngularWay.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
