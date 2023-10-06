import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SupplierService } from '../../service/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-delete-supplier',
  templateUrl: './update-delete-supplier.component.html',
  styleUrls: ['./update-delete-supplier.component.less']
})
export class UpdateDeleteSupplierComponent {
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();
  @Output() public data: EventEmitter<any> = new EventEmitter<any>();
  @Input() masterCompany: any;
  @Input() companyId: any;

  public isOpenEdit: boolean = false;
  public isOpenDelete: boolean = false;

  public form !: FormGroup;

  public fabricCategories = ["Silk", "Wool", "Linen", "Cotton", "Tweed", "Flannel", "Polyester"];

  public businessTypes = ["Retailer", "Wholesaler", "Manufacturer", "Importer", "Industrial Fabric Distributor"]

  constructor(private supplierService: SupplierService, private toast: ToastrService) { }

  ngOnInit() {
    this.setForm()
  }

  public isPopUpEdit() {
    this.isOpenEdit = !this.isOpenEdit;
  }
  public isPopUpDelete() {
    this.isOpenDelete = !this.isOpenDelete;
  }

  public setForm(): void {
    this.form = new FormGroup({
      logoUrl: new FormControl(''),
      companyName: new FormControl(''),
      email: new FormControl(''),
      numberPhone: new FormControl(''),
      productCategories: new FormControl([]),
      businessType: new FormControl([]),
      street: new FormControl(''),
      ward: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    })
  }

  public editCompany(): void {
    const params = {
      logoUrl: this.form.controls['logoUrl']?.value,
      companyName: this.form.controls['companyName']?.value,
      email: this.form.controls['email']?.value,
      numberPhone: this.form.controls['numberPhone']?.value,
      productCategories: this.form.controls['productCategories']?.value,
      businessType: this.form.controls['businessType']?.value,
      street: this.form.controls['street']?.value,
      ward: this.form.controls['ward']?.value,
      district: this.form.controls['district']?.value,
      city: this.form.controls['city']?.value,
      country: this.form.controls['country']?.value
    }
    const EditParams = this.clean(params);
    this.fetchData.emit(params)
    this.isPopUpEdit();
  }

  public deleteCompany(): void {
    const id = this.companyId;
    this.supplierService.deleteCompanyMaster(id).subscribe(() => {
      this.toast.success(`delete company success`);
      this.data.emit()
    }, () => {
      this.toast.error('delete company false')
    })
  }

  // public handleEditCompany(params: any) {
  //   const id = this.companyId
  //   this.supplierService.editCompanyMaster(params, id).subscribe(() => {
  //     this.toast.success(`Edit company 3rd-party ${id} success`)
  //     this.data.emit()
  //   }, () => {
  //     this.toast.error(`Edit company 3rd-party ${id} success`)
  //   })
  // }

  public clean(param: any) {
    for (const propName in param) {
      if (typeof param[propName] === 'string') {
        param[propName] = param[propName].trim();
      }
      if (param[propName] === null || param[propName] === "") {
        delete param[propName];
      }
    }
    return param;
  }
}
