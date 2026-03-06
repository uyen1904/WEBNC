import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post<any>("http://localhost:3002/login",
      { username, password },
      { headers }
    ).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}