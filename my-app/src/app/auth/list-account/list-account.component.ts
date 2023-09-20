import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { accountModel } from "../../shared/account-model";
import { AuthService } from '../shared/auth.service';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { Route, Router } from '@angular/router';
import { addNewUserRequestPayload } from '../shared/add-new-user/add-new-user-request.payload';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.less']
})
export class ListAccountComponent {
  @ViewChild('pageLoader') protected pageLoader !: ElementRef;

  public isPageInitialized !: boolean;
  private pageInitialized = false;
  public isOpen = false
  public isCheckAdmin !: boolean;
  public isLoading: boolean = false;
  currentPage: number = 1;
  pageSize: number = 4;

  public listUser: any;

  constructor(private authService: AuthService, private cd: ChangeDetectorRef, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit() {
    this.getAllAccount()
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.listUser.length) {
      this.currentPage++;
    }
  }


  public getAllAccount() {
    this.isLoading = true;
    this.authService.listAccount().subscribe((data) => {
      if (data) {
        this.listUser = data.user;
        this.toastr.success('get user success')
      } else {
        this.toastr.error('Lấy danh sách tài khoản thất bại');
      }
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }
  public handleEditUser() {
    this.getAllAccount();
  }

  public handleAddUser(queryParams: any) {
    this.isOpen = !this.isOpen
    this.authService.addNewUser(queryParams).subscribe((data) => {
      if (data) {
        this.getAllAccount();
        this.toastr.success('add new user successful')
      } else {
        this.toastr.error('add new user false')
      }
      this.cd.detectChanges
    })
  }

  public changeAdmin(isAdmin: boolean, userId: string) {
    //   console.log(userId);
    //   const updateAdmin = {
    //     isAdmin: isAdmin
    //   }
    //   this.authService.updateAdmin(userId, updateAdmin).subscribe(
    //     () => {
    //       this.toastr.success('Update isAdmin success')
    //     }
    //   )
  }
}
