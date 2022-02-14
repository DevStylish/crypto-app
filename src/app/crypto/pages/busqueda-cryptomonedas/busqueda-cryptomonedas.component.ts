import { Component, OnInit } from '@angular/core';

import { CryptoService } from '../../../service/crypto.service';
import { CryptoCoin } from '../../interfaces/cryptocoin.interface';

@Component({
  selector: 'app-busqueda-cryptomonedas',
  templateUrl: './busqueda-cryptomonedas.component.html',
  styleUrls: ['./busqueda-cryptomonedas.component.css']
})
export class BusquedaCryptomonedasComponent implements OnInit {

  rankingCryptos!: CryptoCoin[];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.obtenerCryptoRanking().subscribe((cryptos) => {
      this.rankingCryptos = cryptos;
    });
  }

}
