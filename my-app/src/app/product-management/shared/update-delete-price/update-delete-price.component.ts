import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { MaterialService } from 'src/app/material-management/shared/material.service';

@Component({
  selector: 'app-update-delete-price',
  templateUrl: './update-delete-price.component.html',
  styleUrls: ['./update-delete-price.component.less']
})
export class UpdateDeletePriceComponent {
  public isOpenEdit: boolean = false;
  public isOpenDelete: boolean = false;


  public form !: FormGroup;

  public productData: any;
  public materialData: any;

  @Input() public dataPrice: any
  @Input() public priceId: any
  @Output() public data: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService: ProductService, private materialService: MaterialService) {

  }

  ngOnInit() {
    this.setForm();
    this.productService.getAllProduct().subscribe((data) => {
      if (data) {
        this.productData = data.products;
      }
    })
    this.materialService.getAllmeterial().subscribe((data) => {
      if (data) {
        this.materialData = data.fabric
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
    this.isPopUpEdit();
    const id = this.priceId;
    this.productService.updatePrice(params, id).subscribe((data) => {
      if (data) {
        alert('update price of product success')
        this.data.emit();
      }
    })
  }


  public deletePrice() {
    this.isPopUpDelete()
    const id = this.priceId
    console.log(id);
    this.productService.deletePrice(id).subscribe(() => {
      alert(`Delete price`)
      this.data.emit();
    })
  }
}
