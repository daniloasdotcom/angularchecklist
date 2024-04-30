import { Component, HostListener } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube002',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './youtube002.component.html',
  styleUrl: './youtube002.component.css'
})
export class youtube002Component {
  //  videoUrl = 'https://www.youtube.com/watch?v=9H6B4Nz75Rc'

  apiLoaded = false;

  videoId = '9H6B4Nz75Rc';

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

