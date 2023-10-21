import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { MaterialService } from 'src/app/material-management/shared/material.service';
import { FormDataServiceService } from 'src/app/shared/UI/form-data-service.service';

@Component({
  selector: 'app-update-delete-product',
  templateUrl: './update-delete-product.component.html',
  styleUrls: ['./update-delete-product.component.less']
})
export class UpdateDeleteProductComponent {
  public isOpenDelete: boolean = false;
  public isOpenEdit: boolean = false;
  public selectedImageURL: any;
  public materialsData: any;

  @Input() public productData: any
  @Input() public productId: any

  @Output() public data: EventEmitter<any> = new EventEmitter<any>();


  public form !: FormGroup;
  constructor(
    private productServcie: ProductService,
    private toast: ToastrService,
    private materialService: MaterialService,
    private formDataService: FormDataServiceService
  ) {

  }
  ngOnInit() {
    this.setForm();
    this.getAllMaterial()
  }
  public setForm() {
    this.form = new FormGroup({
      fileSource: new FormControl(''),
      name: new FormControl(''),
      product_type: new FormControl(''),
      fabricId: new FormControl(''),
      summary: new FormControl(''),
    })
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // Kiểm tra xem tệp đã chọn có phải là hình ảnh không
      if (file.type.match(/image\/*/) !== null) {
        this.form.patchValue({
          fileSource: file
        });
        this.form.get('fileSource')?.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImageURL = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Chọn một tệp hình ảnh.');
      }
    }
  }
  public popUpEdit() {
    this.isOpenEdit = !this.isOpenEdit
  }

  public popUpDelete() {
    this.isOpenDelete = !this.isOpenDelete
  }

  public getAllMaterial() {
    this.materialService.getAllmeterial().subscribe((data) => {
      if (data) {
        this.materialsData = data.fabric
      }
    })
  }

  public editProduct() {
    const formData: FormData = new FormData();
    this.formDataService.appendIfValue(formData, 'image', this.form.controls['fileSource']?.value);
    this.formDataService.appendIfValue(formData, 'name', this.form.controls['name']?.value);
    this.formDataService.appendIfValue(formData, 'product_type', this.form.controls['product_type']?.value);
    this.formDataService.appendIfValue(formData, 'fabricId', this.form.controls['fabricId']?.value);
    this.formDataService.appendIfValue(formData, 'summary', this.form.controls['summary']?.value);
    this.handleEditProduct(formData);
    this.popUpEdit();
  }


  public handleEditProduct(data: any) {
    const id = this.productId
    this.productServcie.updateProduct(id, data).subscribe((data) => {
      if (data.data) {
        this.toast.success(`update product id: ${id}, name: ${this.productData.name} success`)
        this.data.emit();
      } else {
        this.toast.error(`update product id: ${id}, name: ${this.productData.name} false`)
      }
    })
  }

  public deleteProduct() {
    const id = this.productId
    this.productServcie.deleteProduct(id).subscribe(() => {
      this.popUpDelete();
      this.data.emit()
      this.toast.success(`delete product id: ${id}, name: ${this.productData.name} success`)
    }, () => {
      this.toast.error(`delete product id: ${id}, name: ${this.productData.name} false`)
    })
  }
}
