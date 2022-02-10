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

  ngOnInit(): void {}

  buscarCrypto(){
    this.cryptoService.buscarCrypto(this.cryptoName.toUpperCase()).subscribe((crypto) =>{
      this.cryptoMonedas = crypto;
      console.log(this.cryptoMonedas);
    });
  }

  mostrarCryptos(){

  }
}
