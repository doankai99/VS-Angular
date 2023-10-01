import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

  public bookAppointment(params: any, id: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/v1/appointment/bookAppointment/${id}`, params)
  }

  public getBookAppointment(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/appointment/listAppointment/${id}`)
  }

  public deleteAppointment(id: any): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/v1/appointment/deleteAppointment/${id}`)
  }

  public updateStatusAppointment(id: any): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/v1/appointment/updateStatusAppointment/${id}`, [])
  }
}
