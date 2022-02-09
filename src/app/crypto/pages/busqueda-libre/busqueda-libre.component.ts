import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../service/crypto.service';

@Component({
  selector: 'app-busqueda-libre',
  templateUrl: './busqueda-libre.component.html',
  styleUrls: ['./busqueda-libre.component.css']
})
export class BusquedaLibreComponent implements OnInit {

  cryptoName: string = '';
  

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {}

  buscarCrypto(){
    
  }

  mostrarCryptos(){

  }
}
