import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currencies } from '../_models/currencies';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCurrencyData(currencyId: string): Observable<Currencies> {
    return this.http.get<Currencies>(`${this.API_URL}/currency/${currencyId}`);
  }
  getAllCurrencies(): Observable<object[]> {
    return this.http.get<object[]>(`${this.API_URL}/currency/all`);
  }
}
