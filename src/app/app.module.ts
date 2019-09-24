import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoaComponent } from './grupoa/grupoa.component';
import { GrupobComponent } from './grupob/grupob.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent,  GrupoaComponent, GrupobComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
