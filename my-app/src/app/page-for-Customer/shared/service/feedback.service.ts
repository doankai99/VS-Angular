import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  //send feedback
  public sendFeedback(id: any, data: any): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:8080/v1/feedback/sendFeedback/${id}`, data)
  }

  public showFeedback(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/feedback/showFeedback/${id}`)
  }
}
