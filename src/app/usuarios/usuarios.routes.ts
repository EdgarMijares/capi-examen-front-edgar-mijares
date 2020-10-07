import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

export const routes: Routes = [
  { path: 'tabla', component: TablaUsuariosComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UsuariosRoutingModule { }