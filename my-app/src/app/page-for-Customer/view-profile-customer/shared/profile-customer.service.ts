import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileCustomerService {

  constructor(private httpClient: HttpClient) { }

  public getDetailCustomer(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/customer/${id}`)
  }

  public showBodyOfCustomer(id: String): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/bodyCustomer/bodyOfCustomer/${id}`)
  }

  public getBodyMeasurements(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/bodyMeasurementChart/bodyMeasurementChart`)
  }
}
