import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaLibreComponent } from './crypto/pages/busqueda-libre/busqueda-libre.component';
import { DetalleCryptoComponent } from './crypto/pages/detalle-crypto/detalle-crypto.component';
import { BusquedaCryptomonedasComponent } from './crypto/pages/busqueda-cryptomonedas/busqueda-cryptomonedas.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaLibreComponent,
    pathMatch: 'full'
  },
  {
    path: 'detalle/:id',
    component: DetalleCryptoComponent
  },
  {
    path: 'ranking',
    component: BusquedaCryptomonedasComponent
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
