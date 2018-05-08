import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  public param: string;

  ngOnInit() {
    this._route.params.forEach((params:Params) => {
      this.param = params['ident'];
    });
    // console.log(this.param)
  }

}
