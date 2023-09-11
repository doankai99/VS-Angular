import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-customer',
  templateUrl: './menu-customer.component.html',
  styleUrls: ['./menu-customer.component.less']
})
export class MenuCustomerComponent {
  public isOpenMenu: boolean = false;
  public isOpen: boolean = false;
  public isProfile: boolean = false;

  public openMenu() {
    this.isOpenMenu = !this.isOpenMenu
  }

  public isOpenProfile() {
    this.isProfile = !this.isProfile
  }
}
