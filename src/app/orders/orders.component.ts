import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customerID!: number;
  orders: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerID = +params['customerID']; // Get the customer ID from the URL parameter

      // Call the API service to fetch orders related to the customer ID
      this.apiService.getOrdersByCustomer(this.customerID).subscribe((data: any[]) => {
        this.orders = data;
      });
    });
  }
  // createOrder() {
  //   const newOrder = {
  //     orderID: 0, // Assign a default or temporary value for the order ID
  //     customerID: this.customerID, // Use the selected customer ID
  //     itemDescription: 'Sample Item', // Set the item description as desired
  //     quantity: 1, // Set the quantity as desired
  //     price: 0, // Assign a default or temporary value for the price
  //     total: 0, // Assign a default or temporary value for the total
  //     orderDescription: 'Sample Order' // Set the order description as desired
  //   };
  
    // this.apiService.createOrder(newOrder).subscribe((response) => {
    //   console.log('New order created:', response);
    //   // Optionally, you can perform additional actions after the order is created
    // });
 // }
  
}
