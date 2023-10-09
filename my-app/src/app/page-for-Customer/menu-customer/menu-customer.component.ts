import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-customer',
  templateUrl: './menu-customer.component.html',
  styleUrls: ['./menu-customer.component.less']
})
export class MenuCustomerComponent {
  public isOpenMenu: boolean = false;
  public isOpen: boolean = false;
  public isProfile: boolean = false;

  public isToken = localStorage.getItem('accessToken')

  constructor(private router: Router) { }

  public openMenu() {
    this.isOpenMenu = !this.isOpenMenu
  }

  public isOpenProfile() {
    this.isProfile = !this.isProfile
  }

  public logout() {
    const token = this.isToken
    if (token) {
      localStorage.removeItem('token');
      this.router.navigateByUrl('login')
    }
  }
}
