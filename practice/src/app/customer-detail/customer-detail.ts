import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  standalone: false,
  templateUrl: './customer-detail.html',
  styleUrl: './customer-detail.css',
})
export class CustomerDetail implements OnInit {
  selectedCustomer: any;
  customerType: string = '';
  
  constructor(
    private activateRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    console.log("=== CUSTOMER DETAIL PAGE LOADED ===");
    
    this.activateRoute.paramMap.subscribe(param => {
      let customerId = param.get('id');
      console.log("Customer ID from route:", customerId);
      
      if (customerId != null) {
        this.loadCustomerDetail(customerId);
      }
    });
  }
  
  loadCustomerDetail(customerId: string) {
    this.customerService.getCustomerGroups().subscribe({
      next: (data) => {
        console.log("All customer data:", data);
        
        // Tìm customer trong nested array
        for (let group of data) {
          let customer = group.Customers.find((c: any) => c.Id === customerId);
          if (customer) {
            this.selectedCustomer = customer;
            this.customerType = group.CustomterTypeName;
            console.log("Found customer:", this.selectedCustomer);
            console.log("Customer type:", this.customerType);
            break;
          }
        }
        
        if (!this.selectedCustomer) {
          console.error("Customer not found for ID:", customerId);
        }
      },
      error: (error) => {
        console.error("Error loading customer detail:", error);
      }
    });
  }
  
  goBack() {
    console.log("Going back to customer list");
    this.router.navigate(['customer-group-list']);
  }

}
