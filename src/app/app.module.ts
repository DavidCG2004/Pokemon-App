import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de tener esto para tu API

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// 1. IMPORTAMOS NUESTRO NUEVO COMPONENTE DE SPLASH SCREEN AQUÍ 👇
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@NgModule({
  declarations:[
    AppComponent,
    // 2. LO AGREGAMOS A LAS DECLARACIONES AQUÍ 👇
    SplashScreenComponent
  ],
  imports:[
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule // Para que funcione tu PokemonService
  ],
  providers:[{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}