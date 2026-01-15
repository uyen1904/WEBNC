import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Customerservices {
    private url = 'assets/data/customer.json';

  constructor(private http: HttpClient) {}

  get_all_customers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
