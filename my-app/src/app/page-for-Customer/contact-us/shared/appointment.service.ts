import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

  //Api customer book an appointment
  public bookAppointment(params: any, id: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/v1/appointment/bookAppointment/${id}`, params)
  }

  //get Book appointment by customer
  public getBookAppointment(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/appointment/listAppointment/${id}`)
  }

  //Api customer delete appointment
  public deleteAppointment(id: any): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/v1/appointment/deleteAppointment/${id}`)
  }

  //Api customer update status active -> inactive
  public updateStatusAppointment(id: any): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/v1/appointment/updateStatusAppointment/${id}`, [])
  }

  // Get appointment by staff
  public handleDataAppointment(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/appointment/getListAppointment')
  }

  //
  public updateStatusActiveToDone(id: any): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/v1/appointment/updateStatus/${id}`, [])
  }
}
