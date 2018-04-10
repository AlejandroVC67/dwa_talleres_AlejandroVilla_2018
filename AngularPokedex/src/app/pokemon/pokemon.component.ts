import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemonRating = 0

  public ratePokemonUp () {
    this.pokemonRating++;
  }

  public ratePokemonDown () {
    this.pokemonRating--;
  }


  constructor() { }

  ngOnInit() {
  }

}
