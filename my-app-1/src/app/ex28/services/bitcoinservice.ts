import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IBitcoinPrice } from '../classes/BitcoinPrice';

@Injectable({
  providedIn: 'root',
})
export class Bitcoinservice {
 
  private _url: string = '/v1/bpi/currentprice.json';
  
  constructor(private _http: HttpClient) { }
  
  getBitcoinPrice(): Observable<IBitcoinPrice> {
    return this._http.get<IBitcoinPrice>(this._url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}

