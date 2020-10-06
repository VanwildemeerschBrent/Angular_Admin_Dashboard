import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/_services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cryptoService: CurrencyService) { }

  ngOnInit(): void {
  }

  onClickGetCrypto(): void {
    this.cryptoService.getAllCurrencies().subscribe((res) => {
      console.log('Currencies', res);
      debugger;
    })
  }

}
