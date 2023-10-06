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

  //Api Login by staff and Admin
  public login(loginRequestPayload: loginRequestPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/v1/user/login', loginRequestPayload);
  }

  //Api login by customer
  public customerLogin(queryParam: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/v1/customer/login', queryParam)
  }

  // public setAuthorizationHeader(token: string): void {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }

  //Api show list all user
  public listAccount(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/v1/user/getAll')
  }

  //Api add new User
  public addNewUser(addNewUserRequestPayload: addNewUserRequestPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/v1/user/createUser', addNewUserRequestPayload)
  }

  public createCustomer(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/v1/customer/createCustomer', data)
  }

  public deleteAccount(userId: any): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/v1/customer/deleteCustomer/${userId}`)
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

  public isValidToken(token: string): boolean {
    if (!token) {
      // Nếu không có token, token không hợp lệ
      return false;
    }

    // Giả sử token chứa thông tin về thời gian hết hạn (expire time) dưới dạng timestamp
    const tokenExpireTime = 36000;/* Lấy thời gian hết hạn từ token */
    const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại dưới dạng timestamp

    // So sánh thời gian hết hạn với thời gian hiện tại
    if (tokenExpireTime && tokenExpireTime > currentTime) {
      // Token còn hạn và hợp lệ
      return true;
    } else {
      // Token đã hết hạn hoặc không có thông tin thời gian hết hạn
      return false;
    }
  }
}
