import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  //Add order by staff
  public addNewOrder(id: any, param: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/v1/order/createOrder/${id}`, param)
  }

  //Add order by customer
  public addNewOrderByCustomer(id: any, param: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/v1/order/customerOrder/${id}`, param)
  }

  public inactiveOrder(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/order/inactiveOrder`)
  }

  public activeOrder(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/order/orderProcess`)
  }

  public confirmActiveOrder(id: any): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/v1/order/confirmActiveOrder/${id}`, [])
  }

  public orderDetail(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/order/orderDetail/${id}`)
  }

  //List Order of Customer
  public orderCustomer(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/order/listOrderCustomer/${id}`)
  }
}
