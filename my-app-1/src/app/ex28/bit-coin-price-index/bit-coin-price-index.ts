import { Component, OnInit } from '@angular/core';
import { IBitcoinPrice } from '../classes/BitcoinPrice';
import { Bitcoinservice } from '../services/bitcoinservice';

@Component({
  selector: 'app-bit-coin-price-index',
  standalone: false,
  templateUrl: './bit-coin-price-index.html',
  styleUrl: './bit-coin-price-index.css',
})
export class BitCoinPriceIndex implements OnInit {
  bitcoinData?: IBitcoinPrice;
  errMessage: string = '';
  
  constructor(private _service: Bitcoinservice) { }
  
  ngOnInit() {
    this._service.getBitcoinPrice().subscribe({
      next: (data) => { 
        this.bitcoinData = data;
        console.log('Bitcoin Data:', this.bitcoinData);
      },
      error: (err) => { 
        this.errMessage = err.message;
        console.error('Error:', err);
      }
    });
}
}
