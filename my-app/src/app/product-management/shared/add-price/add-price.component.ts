import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { MaterialService } from 'src/app/material-management/shared/material.service';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.less']
})
export class AddPriceComponent {
  public isOpen: boolean = false;
  public form !: FormGroup;

  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  public productData: any;
  public materialData: any;

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


  public openAddPrice() {
    this.isOpen = !this.isOpen
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
  public addPriceforProduct() {
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
    this.fetchData.emit(params);
    this.openAddPrice();
  }
}
