import { Component, HostListener } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube02',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './youtube02.component.html',
  styleUrl: './youtube02.component.css'
})
export class Youtube02Component {
  //  videoUrl = 'https://www.youtube.com/watch?v=jWuOkeWR3Yc'

  apiLoaded = false;

  videoId = 'jWuOkeWR3Yc';

  height = 200; // Altura inicial
  width = 400;  // Largura inicial

  ngOnInit(): void {
    // Lógica de inicialização do componente
    this.adjustVideoSize(); // Chamando a função para ajustar o tamanho do vídeo
  }

  // Função para ajustar o tamanho do vídeo com base no tamanho da tela
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustVideoSize();
  }

  adjustVideoSize() {
    // Verificando a largura da tela
    const screenWidth = window.innerWidth;
    
    // Definindo novas dimensões com base no tamanho da tela
    if (screenWidth < 768) { // Para telas menores que 768 pixels (dispositivos móveis)
      this.height = 150; // Altura reduzida para dispositivos móveis
      this.width = 300;  // Largura reduzida para dispositivos móveis
    } else {
      this.height = 300; // Altura padrão para telas maiores que 768 pixels
      this.width = 600;  // Largura padrão para telas maiores que 768 pixels
    }
  }
}
