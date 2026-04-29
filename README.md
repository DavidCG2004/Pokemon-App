# ⚡ Pokédex App - Ionic & Angular ⚡

Una aplicación móvil y web moderna construida con **Ionic Framework** y **Angular**, diseñada para consumir la [PokeAPI](https://pokeapi.co/) y mostrar información detallada de los Pokémon con una interfaz de usuario atractiva y animaciones personalizadas.
<div align="center">
  <div style="display: grid; 
              grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); 
              gap: 14px; 
              max-width: 580px;">
    
    
  ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
    ![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
    ![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
    
  </div>
</div>


## ✨ Características Principales
* **Búsqueda Dinámica:** Encuentra cualquier Pokémon por su nombre usando el servicio de PokeAPI.
* **Información Detallada:** Visualización de Arte Oficial, tipos, peso, altura, experiencia base y habilidades (identificando las ocultas).
* **Estadísticas Visuales:** Implementación de barras de progreso (`ion-progress-bar`) calculadas porcentualmente para las estadísticas de combate (PS, Ataque, Defensa, etc.).
* **Audio Nativo:** Reproducción del grito oficial (cry) del Pokémon al presionar un botón.
* **Splash Screen Personalizado:** Animación de carga creada 100% con CSS puro (Pokeball rotatoria y rebotando), reemplazando el splash estático por defecto.
* **Assets Nativos:** Íconos de aplicación generados automáticamente para iOS y Android usando `@capacitor/assets`.

---

## 📱 Capturas de la Aplicación

A continuación se muestra el diseño adaptable (Responsive) funcionando tanto en entorno web (Desktop) como simulado en dispositivo móvil.

### 💻 Vista Desktop (Web)
<img width="1366" height="693" alt="Captura de pantalla (95)" src="https://github.com/user-attachments/assets/f0f243e4-335d-453b-83ce-e5aeeec00214" />
<br>
<img width="1366" height="691" alt="Captura de pantalla (96)" src="https://github.com/user-attachments/assets/cf108938-011c-441d-a977-ad1966ba548e" />
<br>
<img width="1366" height="693" alt="Captura de pantalla (97)" src="https://github.com/user-attachments/assets/f1e5412b-ccd8-4a8d-8fe9-1b47ebc6e873" />
<br>
<img width="1366" height="687" alt="Captura de pantalla (94)" src="https://github.com/user-attachments/assets/710d4057-a5d0-4de3-982b-6e456ef4a77a" />

### 📱 Vista Móvil (App)
<p align="center">
  <br>
  <img width="220" alt="Vista Móvil 1" src="https://github.com/user-attachments/assets/b2b07b7a-6d10-403d-ba85-c939de74ca62" />
  <img width="220" alt="Vista Móvil 2" src="https://github.com/user-attachments/assets/b80b985f-fc47-4268-b997-a2c30ff4b4b8" />
  <img width="220" alt="Vista Móvil 3" src="https://github.com/user-attachments/assets/99ca6788-f19e-4ac5-b5b5-1672104ea4dd" />
  <img width="220" alt="Vista Móvil 4" src="https://github.com/user-attachments/assets/3553506d-6866-4b90-a559-6c8261b08c38" />
  <img width="220" alt="Vista Móvil 5" src="https://github.com/user-attachments/assets/c050fa89-710a-42f3-9ca2-2b050b6fbf6d" />
</p>

## 🛠️ Detalle del Proceso de Desarrollo

El desarrollo de esta aplicación se dividió en varias fases estratégicas, priorizando las buenas prácticas de Angular (SRP - Single Responsibility Principle) y el diseño modular.

### Fase 1: Arquitectura y Configuración Inicial
Comenzamos creando un módulo independiente para la página (`pokemon-search`) usando el CLI de Ionic. Se configuró el enrutador principal (`app-routing.module.ts`) aplicando *Lazy Loading* para optimizar la carga de la aplicación.
<div align="center">
  <img width="280" src="https://github.com/user-attachments/assets/fe4338f3-87ef-4a78-a02a-1a1ee866f8b9" alt="Captura de la arquitectura inicial">
</div>

### Fase 2: Consumo de la API (Servicios)
Se utilizó `HttpClientModule` en un servicio centralizado (`pokemon.service.ts`). Se implementaron métodos para manejar peticiones asíncronas usando `Observables`.
* **Manejo de Errores:** Se implementó una lógica de captura de errores (`error.status === 404`) para notificar al usuario si ingresa un nombre de Pokémon incorrecto, mejorando la UX.

<div align="center">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; max-width: 1100px;">
    <img width="100%" 
         alt="Pokemon Service - Consumo de API" 
        src="https://github.com/user-attachments/assets/a5bafa26-2185-4a87-9103-196039947ff4" />
    <img width="50%" 
         alt="Manejo de errores en Pokemon Service" 
        src="https://github.com/user-attachments/assets/56d3d31a-99b5-4ff2-ad2b-ece8f7e76a7e" />
  </div>
</div>


### Fase 3: Construcción de la Interfaz (UI/UX)
La vista (`.html`) se construyó utilizando componentes avanzados de Ionic:
* `<ion-searchbar>` para una entrada de datos amigable en móviles.
* `<ion-card>` y `<ion-chip>` para organizar la información (tipos y habilidades).
* `<ion-progress-bar>` para representar el poder del Pokémon dinámicamente (`stat.base_stat / 255`).
* Integración del objeto `Audio()` nativo de JavaScript para reproducir el atributo `cries` proveniente de la API.
<p align="center">
<img width="700" alt="image" src="https://github.com/user-attachments/assets/6a7706c4-2eb2-4284-95d0-5baca1bfcdec" />
</p>


### Fase 4: Identidad Visual y Splash Screen
Para darle un acabado profesional de PWA/App Nativa:
1. **Splash Screen Dinámico:** Se creó un componente Angular dedicado a la pantalla de carga. Mediante animaciones `@keyframes` en SCSS, se dibujó una Pokeball que rebota y gira sin necesidad de recursos externos `.png` o `.gif`. Se programó para desvanecerse tras 3 segundos.
2. **Íconos de App:** Usando la herramienta `@capacitor/assets`, se generaron todos los tamaños necesarios del ícono de la aplicación para su posterior despliegue en Android e iOS, inyectándolos en las carpetas nativas correspondientes.
<br>
<p align="center">
<img width="220" alt="WhatsApp Image 2026-04-29 at 12 43 29 AM" src="https://github.com/user-attachments/assets/ac99b00c-00e2-4eb4-89bb-03744b44bc6f" />
</p>


## 🚀 Instalación y Ejecución Local

Si deseas clonar este repositorio y ejecutarlo en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DavidCG2004/Pokemon-App.git


