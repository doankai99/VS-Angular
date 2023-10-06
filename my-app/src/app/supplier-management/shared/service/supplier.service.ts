import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  public addNewCompanyParty(param: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/v1/masterCompany/addCompany', param)
  }

  //Display all company 3rd-party
  public getCompanyMaster(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/masterCompany/getAllCompany')
  }

  //Delete company
  public deleteCompanyMaster(id: any): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/v1/masterCompany/deleteCompanyMaster/${id}`)
  }

  //Api Edit company
  public editCompanyMaster(param: any, id: any): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/v1/masterCompany/editMasterCompany/${id}`, param)
  }
}
