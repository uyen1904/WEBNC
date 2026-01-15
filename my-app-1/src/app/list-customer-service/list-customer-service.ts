import { Component, OnInit } from '@angular/core';
import { Customerservices } from '../myservices/customerservices';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-customer-service',
  templateUrl: './list-customer-service.html',
  styleUrls: ['./list-customer-service.css'],
})
export class ListCustomerService implements OnInit {

  customers: any[] = [];

  constructor(
    private cs: Customerservices,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cs.get_all_customers().subscribe(data => {
      this.customers = data;
    });
  }

  view_detail(id: any): void {
    this.router.navigate(['list-customer-services', id]);
  }
}
