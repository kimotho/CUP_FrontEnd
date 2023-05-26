import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:44318/api'; 

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    console.log('getCustomers function called');
    return this.http.get<any[]>(`${this.baseUrl}/Customer`).pipe(
      map(response => {
        //console.log('Customers:', response);
        return response;
      })
    );
  }
  getCustomerById(customerId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Customer/${customerId}`);
  }

  createCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Customer`, customer);
  }

  updateCustomer(customerId: number, customer: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/Customer/${customerId}`, customer);
  }

  deleteCustomer(customerId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Customer/${customerId}`);
  }

  // Orders CRUD operations

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Orders`).pipe(
      map(response => {
        console.log('Orders:', response);
        return response;
      })
    );
  }

  getOrderById(orderId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Orders/${orderId}`);
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Orders`, order);
  }

  updateOrder(orderId: number, order: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/Orders/${orderId}`, order);
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Orders/${orderId}`);
  }
  getOrdersByCustomer(customerID: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Orders/customerOrders?customerID=${customerID}`).pipe(
      map(response => {
        return response;
      })
    );
  }

  //for updating and deleting orders
}
