import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { CryptoCoin } from '../crypto/interfaces/cryptocoin.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiKey: string = "a6d70796dd2837f0fedc3e6a57950c982e2a0a31";

  constructor(private http: HttpClient) { }

  buscarCrypto(cryptoText: string): Observable<CryptoCoin[]>{
    let url = `${environment.apiUrl}?key=${this.apiKey}&ids=${cryptoText}`;

    return this.http.get<CryptoCoin[]>(url);
  }

  obtenerCryptoRanking(){
    let url = `${environment.apiUrl}?key=${this.apiKey}&status=active&sort=rank&per-page=10&page=1`;

    return this.http.get<CryptoCoin[]>(url);
  }
}
