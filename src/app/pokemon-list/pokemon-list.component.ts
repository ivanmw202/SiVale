import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  next: string | null = null;
  previous: string | null = null;
  selectedPokemon: any = null;
  showModal: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPokemons('https://pokeapi.co/api/v2/pokemon/');
  }

  fetchPokemons(url: string): void {
    this.http.get<any>(url).subscribe(response => {
      this.pokemons = response.results;
      this.next = response.next;
      this.previous = response.previous;
    });
  }

  nextPage(): void {
    if (this.next) {
      this.fetchPokemons(this.next);
    }
  }

  previousPage(): void {
    if (this.previous) {
      this.fetchPokemons(this.previous);
    }
  }

  openModal(pokemon: any): void {
    this.http.get<any>(pokemon.url).subscribe(response => {
      this.selectedPokemon = response;
      this.showModal = true;
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedPokemon = null;
  }
}
