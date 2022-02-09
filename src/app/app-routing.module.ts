import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaLibreComponent } from './crypto/pages/busqueda-libre/busqueda-libre.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaLibreComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
