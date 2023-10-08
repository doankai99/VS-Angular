import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginRequestPayload } from './login-Request.payload';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  public isOpen: boolean = false;
  public rememberAccount!: boolean;
  public isError !: boolean;
  public loginRequestPayload!: loginRequestPayload;
  public loginForm !: FormGroup;

  public showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.loginRequestPayload = {
      email: '',
      password: ''
    };
  }
  ngOnInit() {
    this.setForm();
  }
  public isAdmin() {
    this.isOpen = !this.isOpen
  }
  public togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  public setForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  public login() {
    const params = {
      email: this.loginForm.controls['email']?.value,
      password: this.loginForm.controls['password']?.value,
    }
    this.loginAdmin(params);
  }

  public loginAdmin(params: any) {
    this.authService.login(params).subscribe((data) => {
      if (data.status === 'OK') {
        const token = data.data.access_token
        localStorage.setItem('accessToken', token);
        localStorage.setItem('id', data.data?.id);
        localStorage.setItem('isAdmin', data.data?.isAdmin)
        localStorage.setItem('image', data.data?.image)
        this.toastr.success(`hello ${data.data?.email}`)
        this.router.navigateByUrl('/home');
      } else {
        this.isError = true;
        this.toastr.error('email và password không chính xác')
      }
    })
  }

  public loginCustomer() {
    const queryParam = {
      email: this.loginForm.controls['email']?.value,
      password: this.loginForm.controls['password']?.value,
    }
    this.loginByCustomer(queryParam)
  }

  public loginByCustomer(queryParam: any) {
    this.authService.customerLogin(queryParam).subscribe((data) => {
      if (data) {
        const token = data.data?.access_token
        localStorage.setItem('accessToken', token);
        localStorage.setItem('id', data.data?.id);
        this.toastr.success(`hello ${data.data?.email}`)
        this.router.navigateByUrl('/homeCustomer')
      } else {
        this.toastr.error(`login false`)
        this.isError = true;
      }
    })
  }

}
