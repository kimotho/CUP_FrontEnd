import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  @Input() customerID: number; // Receive the customerID from the parent component
  @Output() orderCreated = new EventEmitter<any>(); // Emit an event when an order is created
  constructor() {
    this.customerID = 0; // Assign a default value or initialize it based on your requirements
  }
  order: any = {
    orderID: 0,
    customerID: null,
    itemDescription: '',
    quantity: 0,
    price: 0,
    total: 0,
    orderDescription: ''
  };

  submitOrder() {
    this.order.customerID = this.customerID; // Set the customerID based on the input value
    // You can perform additional validation or processing here
    // Once the order is ready, emit the event to notify the parent component
    this.orderCreated.emit(this.order);
  }
}
