import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getCustomers().subscribe((data: any[]) => {
      this.customers = data;
    });
  }

  generateOrder(customerID: number): void {
  
    this.router.navigate(['/orders', customerID]);
  }
}
