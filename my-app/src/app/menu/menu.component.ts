import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from "@angular/router";
import { map } from 'rxjs';
import { AuthService } from '../auth/shared/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  public isOpenMenu: boolean = false;
  public isOpen: boolean = false;
  public isAdmin: any;
  isSubMenuOpen: { [key: string]: boolean } = {};
  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private el: ElementRef, private renderer: Renderer2, private authService: AuthService) {
  }

  ngOnInit() {

    this.isAdmin = Number(localStorage.getItem('isAdmin'))

  }

  toggleSubMenu(key: string) {
    this.isSubMenuOpen[key] = !this.isSubMenuOpen[key];
  }

  public openMenu() {
    this.isOpenMenu = !this.isOpenMenu
  }
  public logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login'])
  }

}
