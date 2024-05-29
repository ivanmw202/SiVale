import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent {
  @Input() pokemon: any;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
