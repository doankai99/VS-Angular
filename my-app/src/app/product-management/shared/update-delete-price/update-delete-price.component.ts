import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { MaterialService } from 'src/app/material-management/shared/material.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-delete-price',
  templateUrl: './update-delete-price.component.html',
  styleUrls: ['./update-delete-price.component.less']
})
export class UpdateDeletePriceComponent {
  public isOpenEdit: boolean = false;
  public isOpenDelete: boolean = false;
  @Input() isLoading: boolean = false;


  public form !: FormGroup;

  public productData: any;
  public materialData: any;

  @Input() public dataPrice: any
  @Input() public priceId: any
  @Output() public data: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService: ProductService, private materialService: MaterialService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.setForm();
    this.productService.getAllProduct().subscribe((data) => {
      if (data) {
        this.productData = data.products;
      }
    })
  }
  ngAfterViewInit() {

  }

  public setForm() {
    this.form = new FormGroup({
      productId: new FormControl(''),
      fabricId: new FormControl(''),
      price: new FormControl(''),
      discount: new FormControl(''),
      priceGroup: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      promotionDescription: new FormControl(''),
    })
  }

  public editPriceOfProduct() {
    const params = {
      productId: this.form.controls['productId']?.value,
      fabricId: this.form.controls['fabricId']?.value,
      price: this.form.controls['price']?.value,
      discount: this.form.controls['discount']?.value,
      priceGroup: this.form.controls['priceGroup']?.value,
      startDate: this.form.controls['startDate']?.value,
      endDate: this.form.controls['endDate']?.value,
      promotionDescription: this.form.controls['promotionDescription']?.value
    }
    this.handleEditPrice(params);
    this.isPopUpEdit();
  }

  public isPopUpEdit() {
    this.isOpenEdit = !this.isOpenEdit;
  }
  public isPopUpDelete() {
    this.isOpenDelete = !this.isOpenDelete;
  }

  public handleEditPrice(params: any) {
    this.isLoading = true;
    this.isPopUpEdit();
    const id = this.priceId;
    this.productService.updatePrice(params, id).subscribe((data) => {
      if (data) {
        this.data.emit();
        this.toastr.success(`Update price for product success`)
      }
    })
  }


  public deletePrice() {
    this.isPopUpDelete()
    const id = this.priceId
    this.productService.deletePrice(id).subscribe((data) => {
      if (data) {
        this.data.emit();
        this.toastr.success(`Delete price of Product ${id} success`)
      } else {
        this.toastr.error(`delete price of product false`)
      }
    })
  }
}
