import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CryptoCoin } from '../crypto/interfaces/cryptocoin.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiUrl: string = "https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1/currencies/ticker";
  private apiKey: string = "a6d70796dd2837f0fedc3e6a57950c982e2a0a31";

  constructor(private http: HttpClient) { }

  buscarCrypto(cryptoText: string): Observable<CryptoCoin[]>{
    let url = `${this.apiUrl}?key=${this.apiKey}&ids=${cryptoText}`;

    return this.http.get<CryptoCoin[]>(url);
  }

  obtenerCryptoRanking(){
    let url = `${this.apiUrl}?key=${this.apiKey}&status=active&sort=rank&per-page=10&page=1`;

    return this.http.get<CryptoCoin[]>(url);
  }
}
