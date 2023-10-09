import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { createCustomerRequestPayload } from "../create-new-customer/create-customer-request.payload.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public addCustomer(createCustomerRequestPayload: createCustomerRequestPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/v1/customer/createCustomer', createCustomerRequestPayload)
  }

  public getCustomerService(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/v1/customer/getAll/getCustomer')
  }

  public createBodymeasurement(id: any, data: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/v1/bodyCustomer/createBodyMeasurementCustomer/${id}`, data)
  }
}
