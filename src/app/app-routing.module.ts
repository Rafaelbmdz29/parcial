import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoaComponent } from './grupoa/grupoa.component';
import { Componente1Component } from './grupoa/componente1/componente1.component';

export const routes: Routes = [{
  path: 'grupoa',
  component: GrupoaComponent,
  children: [
    {
      path: 'componente1',
      component: Componente1Component
    },
    {
      path: '',
      loadChildren: './grupoa/grupoa/grupoa.module#GrupoaModule'
    }
  ]
}
];

@NgModule({


  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []})
export class AppRoutingModule { }
