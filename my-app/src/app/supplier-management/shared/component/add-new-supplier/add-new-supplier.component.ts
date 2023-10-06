import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SupplierService } from '../../service/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-new-supplier',
  templateUrl: './add-new-supplier.component.html',
  styleUrls: ['./add-new-supplier.component.less']
})
export class AddNewSupplierComponent {
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  public isOpen: boolean = false;

  public fabricCategories = ["Silk", "Wool", "Linen", "Cotton", "Tweed", "Flannel", "Polyester"];

  public businessTypes = ["Retailer", "Wholesaler", "Manufacturer", "Importer", "Industrial Fabric Distributor"]

  public form !: FormGroup;

  constructor(
    private renderer: Renderer2,
    private supplierService: SupplierService, private toast: ToastrService
  ) { }

  ngOnInit() {
    this.setForm();
  }

  public isOpenPopUp() {
    this.isOpen = !this.isOpen
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

  public addCompany() {
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
    this.fetchData.emit(params)
    this.isOpen = !this.isOpen
    // this.addNewCompany(params);
  }

  // public addNewCompany(param: any) {
  //   this.supplierService.addNewCompanyParty(param).subscribe(() => {
  //     this.toast.success('Add company 3rd-party success')
  //   }, () => {
  //     this.toast.error('Add company 3rd-party false')
  //   })
  // }

}
