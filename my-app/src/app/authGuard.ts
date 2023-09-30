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
    const token = localStorage.getItem('accessToken');

    if (token) {
      return true;
    } else {
      // Nếu không có token hoặc token không hợp lệ, chuyển hướng về trang đăng nhập
      return this.router.parseUrl('/login');
    }
  }
}
