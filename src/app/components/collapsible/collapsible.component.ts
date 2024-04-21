import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapsible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.css'
})

export class CollapsibleComponent {
  @Input() title: string = '';
  mostrarConteudo: boolean = false;

  toggleConteudo(): void {
    this.mostrarConteudo = !this.mostrarConteudo;
  }
}
