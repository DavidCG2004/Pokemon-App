import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  showSplash: boolean = true;
  fadeOut: boolean = false;

  constructor() { }

  ngOnInit() {
    // Simulamos un tiempo de carga (ej. 3 segundos)
    setTimeout(() => {
      this.fadeOut = true; // Inicia la animación de desvanecimiento
      
      // Esperamos que termine la animación CSS (500ms) para borrarlo del DOM
      setTimeout(() => {
        this.showSplash = false;
      }, 500);
      
    }, 3000);
  }
}