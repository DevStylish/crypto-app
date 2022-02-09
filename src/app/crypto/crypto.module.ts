import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaLibreComponent } from './pages/busqueda-libre/busqueda-libre.component';
import { BusquedaCryptomonedasComponent } from './pages/busqueda-cryptomonedas/busqueda-cryptomonedas.component';
import { DetalleCryptoComponent } from './pages/detalle-crypto/detalle-crypto.component';


@NgModule({
  declarations: [
    BusquedaLibreComponent,
    BusquedaCryptomonedasComponent,
    DetalleCryptoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusquedaLibreComponent,
    BusquedaCryptomonedasComponent,
    DetalleCryptoComponent
  ],
})
export class CryptoModule { }
