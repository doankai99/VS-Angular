import { Component } from '@angular/core';
import { SupplierService } from './shared/service/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.less']
})
export class SupplierManagementComponent {

  public isLoading: boolean = false;

  public masterCompany: any;

  public currentPage: number = 1;
  public pageSize: number = 3;
  public isAdmin: any;

  constructor(private supplierService: SupplierService, private toast: ToastrService) { }

  ngOnInit() {
    this.isAdmin = Number(localStorage.getItem('isAdmin'))
    this.getMasterCompany()
  }


  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.masterCompany?.length) {
      this.currentPage++;
    }
  }

  public getMasterCompany() {
    this.supplierService.getCompanyMaster().subscribe((data) => {
      if (data) {
        this.masterCompany = data.masterCompany
      } else {
        this.toast.error(data.message)
      }
    })
  }

  public handleAddCompany(param: any) {
    this.isLoading = true;
    this.supplierService.addNewCompanyParty(param).subscribe(() => {
      this.toast.success('Add company 3rd-party success')
      this.getMasterCompany;
    }, () => {
      this.toast.error('Add company 3rd-party false')
    })
    this.isLoading = false;
  }

  public handleEditCompany(params: any, id: any) {
    // const id = this.masterCompany._id
    this.supplierService.editCompanyMaster(params, id).subscribe(() => {
      this.toast.success(`Edit company 3rd-party ${id} success`)
      this.getMasterCompany();
    }, () => {
      this.toast.error(`Edit company 3rd-party ${id} success`)
    })
  }

  public handleCompany() {
    this.getMasterCompany();
  }
}
