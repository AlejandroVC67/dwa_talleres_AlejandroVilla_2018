import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SvgIconSpriteModule } from 'ng-svg-icon-sprite';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SvgIconSpriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
