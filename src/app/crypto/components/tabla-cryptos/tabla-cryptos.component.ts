import { Component, Input, OnInit } from '@angular/core';
import { CryptoCoin } from '../../interfaces/cryptocoin.interface';

@Component({
  selector: 'app-tabla-cryptos',
  templateUrl: './tabla-cryptos.component.html',
  styleUrls: ['./tabla-cryptos.component.css']
})
export class TablaCryptosComponent implements OnInit {

  @Input() cryptos: CryptoCoin[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
