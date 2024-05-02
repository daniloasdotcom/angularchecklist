import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-copyble',
  standalone: true,
  imports: [],
  templateUrl: './copyble.component.html',
  styleUrl: './copyble.component.css'
})
export class CopybleComponent {

  constructor(private elementRef: ElementRef) { }

  copiarCodigo() {
    const codigoContainer = this.elementRef.nativeElement.querySelector('code');
    const range = document.createRange();
    range.selectNode(codigoContainer);
    
    if (window.getSelection) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        alert('Código copiado!');
      }
    } else {
      console.error('window.getSelection não está disponível neste navegador.');
    }
  }
}
