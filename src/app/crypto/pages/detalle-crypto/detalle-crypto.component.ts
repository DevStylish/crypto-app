import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoService } from '../../../service/crypto.service';
import { CryptoCoin } from '../../interfaces/cryptocoin.interface';

@Component({
  selector: 'app-detalle-crypto',
  templateUrl: './detalle-crypto.component.html',
  styleUrls: ['./detalle-crypto.component.css']
})
export class DetalleCryptoComponent implements OnInit {

  cryptoCoin!: CryptoCoin;
  idMoneda: string = "";

  constructor(private router: Router, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.idMoneda = this.router.url.split("/")[2];
    this.cryptoService.buscarCrypto(this.idMoneda)
      .subscribe((cryptoMoneda) => {
        this.cryptoCoin = cryptoMoneda[0];
        console.log(cryptoMoneda[0])
      });
  }
}
