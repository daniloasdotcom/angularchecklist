import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { VideoComponent } from '../video/video.component';
import { FooterComponent } from '../footer/footer.component';
import { SecondComponent } from '../lessons/second/second.component';
import { FirstComponent } from '../lessons/first/first.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, VideoComponent, FooterComponent,FirstComponent, SecondComponent],
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
