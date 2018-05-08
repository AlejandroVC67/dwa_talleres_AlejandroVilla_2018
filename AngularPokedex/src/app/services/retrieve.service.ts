import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RetrieveService {
    public URL: string;

    constructor( private _http:Http ){
        this.URL = "https://api.myjson.com/bins/161dhe";
    }

    getPokemonData() {
      return this._http.get(this.URL).map(res => res.json());
    }
}
