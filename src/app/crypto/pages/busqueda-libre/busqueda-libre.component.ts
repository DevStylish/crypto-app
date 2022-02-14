import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../service/crypto.service';
import { CryptoCoin } from '../../interfaces/cryptocoin.interface';

@Component({
  selector: 'app-busqueda-libre',
  templateUrl: './busqueda-libre.component.html',
  styleUrls: ['./busqueda-libre.component.css']
})
export class BusquedaLibreComponent implements OnInit {

  cryptoName: string = '';
  cryptoMonedas!: CryptoCoin[];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void { }

  buscarCrypto() {
    if (this.cryptoName.includes(" ")) {
      let listaNameCryptos = this.cryptoName.split(" ");
      let valuesCryptos = "";
      for (let i = 0; i < listaNameCryptos.length; i++) {
        if(i === listaNameCryptos.length-1){
          valuesCryptos += listaNameCryptos[i];
        }else{
          valuesCryptos += listaNameCryptos[i] +",";
        }
      }
      this.cryptoService.buscarCrypto(valuesCryptos.toUpperCase()).subscribe((crypto) => {
        this.cryptoMonedas = crypto;
      });
    } else {
      this.cryptoService.buscarCrypto(this.cryptoName.toUpperCase()).subscribe((crypto) => {
        this.cryptoMonedas = crypto;
      });
    }
  }

  mostrarCryptos() {

  }
}
