import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
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
