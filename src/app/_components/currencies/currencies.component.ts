import { Component, OnInit } from '@angular/core';
import { Currencies } from 'src/app/_models/currencies';
import { CurrencyDetail } from 'src/app/_models/currencyDetail.model';
import { CurrencyService } from 'src/app/_services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  currencies: Currencies[];
  currencyDetail: CurrencyDetail;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getAllCurrencies().subscribe((currencies) => {
      this.currencies = currencies.sort((a, b) => (a.country < a.country) ? -1 : (a.country > b.country) ? 1 : 0);
    });
  }

  onClickCurrency(currency: Currencies): void {
    this.currencyService.getCurrencyData(currency.currency).subscribe((currencyDetail) => {
      this.currencyDetail = currencyDetail;
    });
  }

}
