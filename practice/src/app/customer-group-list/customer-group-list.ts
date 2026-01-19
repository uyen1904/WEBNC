import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-group-list',
  standalone: false,
  templateUrl: './customer-group-list.html',
  styleUrl: './customer-group-list.css',
})
export class CustomerGroupList implements OnInit {
  customerGroups: any[] = [];
  loading: boolean = true;
  error: string = '';
  
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    console.log("CustomerGroupList Constructor");
  }
  
  ngOnInit(): void {
    console.log("CustomerGroupList ngOnInit - Starting...");
    this.loadCustomerGroups();
  }
  
  loadCustomerGroups() {
    console.log("Calling customerService.getCustomerGroups()...");
    
    this.customerService.getCustomerGroups().subscribe({
      next: (data) => {
        console.log("SUCCESS - Data received:", data);
        this.customerGroups = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("ERROR:", error);
        console.error("Error status:", error.status);
        console.error("Error message:", error.message);
        console.error("Error URL:", error.url);
        
        this.error = `Failed to load data: ${error.status} - ${error.message}`;
        this.loading = false;
         this.cdr.detectChanges();
      },
      complete: () => {
        console.log("HTTP Request completed");
      }
    });
    
    console.log("Subscribe initiated (waiting for response...)");
  }
  
  viewDetail(customerId: string) {
    this.router.navigate(['customer-detail', customerId]);
  }

}
