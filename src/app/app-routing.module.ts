import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoaComponent } from './grupoa/grupoa.component';
import { GrupobComponent } from './grupob/grupob.component';

export const routes: Routes = [{
  path: 'grupoa',
  component: GrupoaComponent,
  children: [
    {path: '', loadChildren: './grupoa/grupoa.module#GrupoaModule',}
  ]},
  {
    path: 'grupob',
    component: GrupobComponent,
    children: [
      { path: '', loadChildren: './grupob/grupob.module#GrupobModule', }
    ]
  }

];

@NgModule({


  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []})
export class AppRoutingModule { }
