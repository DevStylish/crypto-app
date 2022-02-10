import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { CryptoCoin } from '../crypto/interfaces/cryptocoin.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiKey: string = "38d0b5c45ca82528c802116f70f81ed40e0630f3";

  constructor(private http: HttpClient) { }

  buscarCrypto(cryptoText: string): Observable<CryptoCoin[]>{
    let url = `${environment.apiUrl}?key=${this.apiKey}&ids=${cryptoText}`;

    return this.http.get<CryptoCoin[]>(url);
  }
}
