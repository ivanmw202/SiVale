import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';
import { CapitalizePipe } from './capitalize.pipe';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonCardComponent,
    FooterComponent,
    PokemonModalComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
