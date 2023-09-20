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

  constructor(private httpClient: HttpClient) { }

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() email: EventEmitter<string> = new EventEmitter();

  // public getAccessToken(): string {
  //   return this.accessToken;
  // }

  // getAuthHeaders(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${this.getAccessToken()}`
  //   });
  // }

  public login(loginRequestPayload: loginRequestPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/user/login', loginRequestPayload)
  }

  public customerLogin(queryParam: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/customer/login', queryParam)
  }

  // getJwtToken() {
  //   return this.localStorage.retrieve('authenticationToken');
  // }

  refreshToken() {
    // return this.httpClient.post<loginResponse>('http://localhost:8080/api/auth/refresh/token',
    //   this.refreshTokenPayload)
    //   .pipe(tap(response => {
    //     this.localStorage.clear('authenticationToken');
    //     this.localStorage.clear('expiresAt');

    //     this.localStorage.store('authenticationToken',
    //       response.authenticationToken);
    //     this.localStorage.store('expiresAt', response.expiresAt);
    //   }));
  }

  public setAuthorizationHeader(token: string): void {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  public listAccount(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/user/getAll')
  }

  public addNewUser(addNewUserRequestPayload: addNewUserRequestPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/user/createUser', addNewUserRequestPayload)
  }

  public deleteAccount(userId: string): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/user/delete/${userId}`)
  }

  public editUser(userId: string, addNewUserRequestPayload: addNewUserRequestPayload): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/user/update/${userId}`, addNewUserRequestPayload)
  }
  public updateAdmin(userId: string, addNewUserRequestPayload: addNewUserRequestPayload): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/user/update/${userId}`, addNewUserRequestPayload)
  }

  // getUserName() {
  //   return this.localStorage.retrieve('email');
  // }
  // getRefreshToken() {
  //   return this.localStorage.retrieve('refreshToken');
  // }
}
