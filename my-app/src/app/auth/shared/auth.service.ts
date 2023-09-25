import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import axios from 'axios';
import { loginRequestPayload } from '../login/login-Request.payload';
import { loginResponse } from '../login/login-response.payload';
import { accountModel } from "../../shared/account-model";
import { addNewUserRequestPayload } from './add-new-user/add-new-user-request.payload';
// import { LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken: string = '';
  public loggedIn: boolean = false;

  constructor(private httpClient: HttpClient) { }

  @Output() email: EventEmitter<string> = new EventEmitter();

  public login(loginRequestPayload: loginRequestPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/v1/user/login', loginRequestPayload);
  }

  public customerLogin(queryParam: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/v1/customer/login', queryParam)
  }

  public setAuthorizationHeader(token: string): void {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  public listAccount(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/v1/user/getAll')
  }

  public addNewUser(addNewUserRequestPayload: addNewUserRequestPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/v1/user/createUser', addNewUserRequestPayload)
  }

  public deleteAccount(userId: string): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/v1/user/delete/${userId}`)
  }

  public editUser(userId: string, addNewUserRequestPayload: addNewUserRequestPayload): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/v1/user/update/${userId}`, addNewUserRequestPayload)
  }
  public updateAdmin(userId: string, addNewUserRequestPayload: addNewUserRequestPayload): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/v1/user/update/${userId}`, addNewUserRequestPayload)
  }

  public detailUser(id: any): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/v1/user/${id}`)
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
