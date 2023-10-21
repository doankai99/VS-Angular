import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MaterialService } from '../shared/material.service';
import { SupplierService } from 'src/app/supplier-management/shared/service/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.less']
})
export class EditMaterialComponent {
  public isOpenDelete = false;
  public isOpenEdit = false;
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();
  @Output() public data: EventEmitter<any> = new EventEmitter<any>();

  @Input() public materialData: any
  @Input() public materialId: any

  public form !: FormGroup;
  public selectedImageURL: any;
  public masterCompany: any;

  public fabricCategories = ["Silk", "Wool", "Linen", "Cotton", "Tweed", "Flannel", "Polyester"];

  constructor(
    private materialService: MaterialService,
    private supplierService: SupplierService,
    private toast: ToastrService
  ) {

  }

  ngOnInit() {
    this.setForm();
    this.handleDataCompany();
  }

  public toggleFilter() {
    this.isOpenDelete = !this.isOpenDelete;
    this.isOpenEdit = false;
  }

  public popUpEdit() {
    this.isOpenEdit = !this.isOpenEdit;
    this.isOpenDelete = false;
  }

  public setForm() {
    this.form = new FormGroup({
      fileSource: new FormControl(''),
      material: new FormControl(''),
      companyId: new FormControl(''),
      name: new FormControl(''),
      color: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
    })
  }

  public onFileChange(event: any) {
    if (event?.target?.files?.length > 0) {
      const file = event?.target?.files[0];
      // Kiểm tra xem tệp đã chọn có phải là hình ảnh không
      if (file?.type.match(/image\/*/) !== null) {
        this.form.patchValue({
          fileSource: file
        });
        this.form.get('fileSource')?.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImageURL = e.target?.result;
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Chọn một tệp hình ảnh.');
      }
    }
  }

  public applyEdit() {
    const formData: FormData = new FormData();

    if (this.form.controls['fileSource']?.value) {
      formData.append('image', this.form.controls['fileSource']?.value);
    }

    const material = this.form.controls['material']?.value;
    if (material) {
      formData.append('material', material);
    }

    const companyId = this.form.controls['companyId']?.value;
    if (companyId) {
      formData.append('companyId', companyId);
    }

    const name = this.form.controls['name']?.value;
    if (name) {
      formData.append('name', name);
    }

    const color = this.form.controls['color']?.value;
    if (color) {
      formData.append('color', color);
    }

    const size = this.form.controls['size']?.value;
    if (size) {
      formData.append('size', size);
    }

    const price = this.form.controls['price']?.value;
    if (price) {
      formData.append('price', price);
    }

    const description = this.form.controls['description']?.value;
    if (description) {
      formData.append('description', description);
    }

    this.editMaterial(formData);
    this.popUpEdit();
  }

  public editMaterial(queryParams: any) {
    this.isOpenEdit = !this.isOpenEdit;
    const id = this.materialId;
    this.materialService.editMaterial(queryParams, id).subscribe((data) => {
      if (data) {
        this.toast.success(`update material ${this.materialData.name} success`)
        this.data.emit()
      }
    })
  }

  public deleteFabric() {
    this.isOpenDelete = !this.isOpenDelete;
    const id = this.materialId
    this.materialService.deleteMaterial(id).subscribe(() => {
      alert('delete material success')
      this.data.emit()
    })
  }

  public handleDataCompany() {
    this.supplierService.getCompanyMaster().subscribe((data) => {
      this.supplierService.getCompanyMaster().subscribe((data) => {
        if (data) {
          this.masterCompany = data.masterCompany
        } else {
          this.toast.error(data.message)
        }
      })
    })
  }

}
