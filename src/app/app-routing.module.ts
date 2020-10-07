import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component'

import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';
const routes: Routes = [
  { path: '', component: TablaUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
