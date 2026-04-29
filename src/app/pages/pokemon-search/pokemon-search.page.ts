import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.page.html',
  styleUrls:['./pokemon-search.page.scss'],
})
export class PokemonSearchPage implements OnInit {
  searchTerm: string = '';
  pokemon: any = null;
  
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  searchPokemon() {
    if (!this.searchTerm || this.searchTerm.trim() === '') return;

    this.loading = true;
    this.errorMessage = '';
    this.pokemon = null; 

    const cleanSearch = this.searchTerm.trim().toLowerCase();

    this.pokemonService.getPokemonDetails(cleanSearch).subscribe({
      next: (response) => {
        this.pokemon = response;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon:', error);
        this.loading = false;
        if (error.status === 404) {
          this.errorMessage = 'Pokémon no encontrado. Revisa el nombre.';
        } else {
          this.errorMessage = 'Error de conexión. Inténtalo de nuevo.';
        }
      },
    });
  }

  formatStatName(name: string): string {
    const statsMap: any = {
      'hp': 'PS',
      'attack': 'Ataque',
      'defense': 'Defensa',
      'special-attack': 'Atq. Esp.',
      'special-defense': 'Def. Esp.',
      'speed': 'Velocidad'
    };
    return statsMap[name] || name;
  }

  playSound() {
    if (this.pokemon && this.pokemon.cries && this.pokemon.cries.latest) {
      const audio = new Audio(this.pokemon.cries.latest);
      audio.play();
    }
  }
}