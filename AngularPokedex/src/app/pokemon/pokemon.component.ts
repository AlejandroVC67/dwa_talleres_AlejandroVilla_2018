import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonData: string;

  public pokemonRating = 0;

  public ratePokemonUp () {
    this.pokemonRating++;
  }

  public ratePokemonDown () {
    this.pokemonRating--;
  }
  public values = <any>{}
  public data = []

  constructor() { }

  ngOnInit() {
    this.data = this.pokemonData.split(',')
    this.values.name = this.data[1]
    this.values.id = this.data[2]
    this.values.index = parseInt(this.data[0]) + 1
    this.values.level = this.data[3]
    this.values.type =  this.data[4]
    this.values.ability = this.data[5]
    this.values.height = this.data[6]
    this.values.weight = this.data[7]
  }

  getURL() {
    return "url('../../assets/pokemon/" + this.values.index + ".png')"
  }

}
