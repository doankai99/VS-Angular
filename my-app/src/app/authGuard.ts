import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'; // Giả sử bạn có một AuthService để kiểm tra đăng nhập
import { AuthService } from './auth/shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private token: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem('accessToken')
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    console.log(this.token);

    if (this.token) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
