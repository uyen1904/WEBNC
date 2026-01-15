import { Component, OnInit } from '@angular/core';
import {CustomerServices} from '../customer-services';
import { Customerservices } from '../myservices/customerservices';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit {

  customers: any[] = [];

  constructor(private customerService: Customerservices) {}

  ngOnInit(): void {
    this.customerService.get_all_customers().subscribe(data => {
      this.customers = data;
    });
  }
}
