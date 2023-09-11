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
    console.log(createCustomerRequestPayload);
    return this.httpClient.post<any>('http://localhost:8080/customer/createCustomer', createCustomerRequestPayload)
  }

  public getCustomerService(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/customer/getAll/getCustomer')
  }
}
