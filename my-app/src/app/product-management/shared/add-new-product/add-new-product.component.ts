import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaterialService } from 'src/app/material-management/shared/material.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.less']
})
export class AddNewProductComponent {
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();
  public isOpen: boolean = false;
  public selectedImageURL: any;
  public materialsData: any;

  public form !: FormGroup;

  constructor(private materialService: MaterialService) {

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
        console.error('image not found.');
      }
    }
  }

  public getAllMaterial() {
    this.materialService.getAllmeterial().subscribe((data) => {
      if (data) {
        this.materialsData = data.fabric
      }
    })
  }
  public openAddProduct() {
    this.isOpen = !this.isOpen
  }

  public addNewProduct() {
    const formData: FormData = new FormData();
    if (this.form.controls['fileSource']?.value) {
      formData.append('image', this.form.controls['fileSource']?.value);
    }
    formData.append('name', this.form.controls['name']?.value);
    formData.append('product_type', this.form.controls['product_type']?.value);
    formData.append('fabricId', this.form.controls['fabricId']?.value);
    formData.append('summary', this.form.controls['summary']?.value);
    this.fetchData.emit(formData);
    this.openAddProduct();
  }
}
