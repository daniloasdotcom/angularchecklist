import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { youtube02Component } from '../../youtube02/youtube02.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, youtube02Component, YouTubePlayerModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})

export class FirstComponent implements OnInit{
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() text: string = '';
  mostrarConteudo: boolean = false;
  isMobile: boolean = false;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768; // Define se é um dispositivo móvel
  }

  toggleConteudo(): void {
    this.mostrarConteudo = !this.mostrarConteudo;
  }
}
