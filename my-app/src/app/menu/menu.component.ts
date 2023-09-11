import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from "@angular/router";
import { map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  public isOpenMenu: boolean = false;
  public isOpen: boolean = false;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  public logout() {
    localStorage.removeItem('rememberedAccount');
    this.router.navigate(['/login'])
  }

  public openMenu() {
    this.isOpenMenu = !this.isOpenMenu
  }

}
