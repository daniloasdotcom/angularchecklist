import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { youtube02Component } from '../../youtube02/youtube02.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, youtube02Component],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})

export class SecondComponent implements OnInit{
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