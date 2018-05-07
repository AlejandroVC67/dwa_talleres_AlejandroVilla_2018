import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }


  goHome() {
    this._router.navigate(['/home']);
  }
}
