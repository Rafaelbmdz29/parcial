import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [{
  path: 'app',
  component: AppComponent,
  children: [
    {
      path: 'grupoa',
      loadChildren: './grupoa/grupoa.module#GrupoaModule'
    },
    {
      path: 'grupob',
      loadChildren: './grupob/grupob.module#GrupobModule'
    }
  ]
}
];

@NgModule({


  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []})
export class AppRoutingModule { }
