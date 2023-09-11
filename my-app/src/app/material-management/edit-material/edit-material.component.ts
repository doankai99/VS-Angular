import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MaterialService } from '../shared/material.service';

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
  constructor(private materialService: MaterialService) {

  }

  ngOnInit() {
    this.setForm();
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
      image: new FormControl(''),
      material: new FormControl(''),
      name: new FormControl(''),
      color: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl(''),
      currency: new FormControl(''),
      description: new FormControl(''),
    })
  }

  public applyEdit() {
    const id = this.materialId
    const params: any = {
      image: this.form.controls['image']?.value,
      material: this.form.controls['material']?.value,
      name: this.form.controls['name']?.value,
      color: this.form.controls['color']?.value,
      size: this.form.controls['size']?.value,
      price: this.form.controls['price']?.value,
      currency: this.form.controls['price']?.value,
      description: this.form.controls['description']?.value
    }
    const EditParams = this.clean(params);
    this.editMaterial(params)
  }

  public editMaterial(queryParams: any) {
    this.isOpenEdit = !this.isOpenEdit;
    const id = this.materialId;
    this.materialService.editMaterial(queryParams, id).subscribe(() => {
      alert(`update material ${this.materialData.name} success`)
      this.data.emit()
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
