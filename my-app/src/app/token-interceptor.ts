import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   req = req.clone({
  //     setHeaders: {
  //       // 'Content-Type': 'application/json; charset=utf-8',
  //       // 'Accept': 'application/json',
  //       'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,

  //     },
  //   });

  //   return next.handle(req);
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // Kiểm tra xem có token nào không
    if (accessToken) {
      // Thực hiện kiểm tra thời hạn của token
      const tokenExpireTime = 36000/* Lấy thời gian hết hạn từ token */;
      const currentTime = Math.floor(Date.now() / 1000);

      // Kiểm tra nếu token sắp hết hạn (ví dụ: còn 1 phút trước khi hết hạn), bạn có thể refresh token ở đây
      if (tokenExpireTime - currentTime <= 60) {
        // Thực hiện refresh token, ví dụ gửi yêu cầu đến máy chủ để lấy token mới
        // Sau khi lấy được token mới, lưu nó vào localStorage và thay thế token cũ trong header

        // Lưu token mới vào localStorage
        // localStorage.setItem('accessToken', newAccessToken);

        // Sử dụng token mới trong header
        req = req.clone({
          setHeaders: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
      }

      // Tiếp tục gửi yêu cầu với token hiện tại
      return next.handle(req).pipe(
        catchError(error => {
          // Xử lý lỗi, ví dụ: nếu lỗi là "Unauthorized" (401), có thể là do token đã hết hạn
          if (error.status === 401) {
            // Xóa token khỏi localStorage
            localStorage.removeItem('accessToken');
            // Xóa refresh token nếu bạn sử dụng nó
            localStorage.removeItem('refreshToken');
            // Chuyển hướng đến trang đăng nhập hoặc thực hiện các hành động khác
            // this.router.navigate(['/login']);
          }
          return throwError(error);
        })
      );
    }

    // Nếu không có token, tiếp tục gửi yêu cầu mà không thay đổi gì
    return next.handle(req);
  }
}
