import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoaComponent } from './grupoa.component';
import { Componente1Component } from './componente1/componente1.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoaRoutingModule { }
