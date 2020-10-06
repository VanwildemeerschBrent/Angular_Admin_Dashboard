import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currencies } from '../_models/currencies';
import { CurrencyDetail } from '../_models/currencyDetail.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private API_URL = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  getCurrencyData(currencyId: string): Observable<CurrencyDetail> {
    return this.http.get<CurrencyDetail>(`${this.API_URL}/currency/get/${currencyId}`);
  }
  getAllCurrencies(): Observable<Currencies[]> {
    return this.http.get<Currencies[]>(`${this.API_URL}/currency/all`);
  }
}
