import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public orderDashboard(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/dashboard/orderDashboard')
  }

  public customerDashboard(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/dashboard/customerDashboard')
  }

  public appointmentDashboard(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/dashboard/appointmentDashboard')
  }

  public pieChartDataOrder(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/dashboard/pieChartStatusOrder')
  }

  public handleStatistical(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/dashboard/totalStatistics')
  }
}
