import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoaComponent } from './grupoa/grupoa.component';
import { GrupobComponent } from './grupob/grupob.component';

@NgModule({
  declarations: [AppComponent,  GrupoaComponent, GrupobComponent],
  imports: [CommonModule, AppRoutingModule],
   providers: [],
})
export class AppModule { }
