import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'personajes/:id', component: DetallePersonajeComponent },
  { path: '', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
