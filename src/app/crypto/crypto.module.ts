import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BusquedaLibreComponent } from './pages/busqueda-libre/busqueda-libre.component';
import { BusquedaCryptomonedasComponent } from './pages/busqueda-cryptomonedas/busqueda-cryptomonedas.component';
import { DetalleCryptoComponent } from './pages/detalle-crypto/detalle-crypto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TablaCryptosComponent } from './components/tabla-cryptos/tabla-cryptos.component';


@NgModule({
  declarations: [
    BusquedaLibreComponent,
    BusquedaCryptomonedasComponent,
    DetalleCryptoComponent,
    BuscadorComponent,
    TablaCryptosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BusquedaLibreComponent,
    BusquedaCryptomonedasComponent,
    DetalleCryptoComponent,
    BuscadorComponent,
    TablaCryptosComponent
  ],
})
export class CryptoModule { }
