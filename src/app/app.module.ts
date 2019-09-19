import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { Componente1Component } from './grupoa/componente1/componente1.component';


@NgModule({
  declarations: [Componente1Component],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
