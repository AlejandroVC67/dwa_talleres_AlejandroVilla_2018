import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [RetrieveService]
})
export class GridComponent implements OnInit {
  public data = [];
  constructor(private _route: ActivatedRoute, private _router: Router, private _retrieveService: RetrieveService) { }

  ngOnInit() {
    this._retrieveService.getPokemonData().subscribe(
      result => {
        this.data = result;
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }

  getURL(id) {
    return "url('../../assets/pokemon/" + this.data[id]['image'] + "')"
  }

  seeDetails(_index, _name, _id, _level, _type, _ability, _height, _weight, _score){
    this._router.navigate(['/pokedex/'+_index+ ',' + _name + ',' + _id + ',' + _level + ',' + _type + ',' + _ability + ',' + _height + ',' + _weight]);
  }

}
