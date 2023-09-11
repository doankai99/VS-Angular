import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { materialRequestPayload } from "../payload/material-Request.payload";
import { addMaterialPayload } from "./add-material.payload";
import { MaterialService } from "../shared/material.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.less']
})
export class AddMaterialComponent {

  public isOpen: boolean = false;
  public form !: FormGroup;
  public selectedImageURL: any;
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private materialService: MaterialService, private toast: ToastrService, private router: Router) {
  }

  ngOnInit() {
    this.setForm();
  }

  public toggleDetailUser() {
    this.isOpen = !this.isOpen
  }

  public setForm() {
    this.form = new FormGroup({
      fileSource: new FormControl(''),
      material: new FormControl(''),
      name: new FormControl(''),
      color: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
    })
  }

  public onFileChange(event: any) {
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   this.form.patchValue({
    //     fileSource: file
    //   });
    //   this.form.get('fileSource')?.updateValueAndValidity();
    // }
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

  public addMaterial() {
    const formData: FormData = new FormData();
    if (this.form.controls['fileSource']?.value) {
      formData.append('image', this.form.controls['fileSource']?.value);
    }
    formData.append('material', this.form.controls['material']?.value);
    formData.append('name', this.form.controls['name']?.value);
    formData.append('color', this.form.controls['color']?.value);
    formData.append('size', this.form.controls['size']?.value);
    formData.append('price', this.form.controls['price']?.value);
    formData.append('description', this.form.controls['description']?.value);
    this.fetchData.emit(formData)
    this.toggleDetailUser();
  }

  public resetInformation() {

  }
}
