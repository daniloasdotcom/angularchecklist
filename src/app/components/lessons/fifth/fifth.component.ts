import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CopybleComponent } from '../../copyble/copyble.component';

@Component({
  selector: 'app-fifth',
  standalone: true,
  imports: [CommonModule, CopybleComponent],
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent {
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
