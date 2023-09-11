import { Component } from '@angular/core';
import { MaterialService } from "../shared/material.service";
import { materialRequestPayload } from "../payload/material-Request.payload";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-material-management',
  templateUrl: './material-management.component.html',
  styleUrls: ['./material-management.component.less']
})
export class MaterialManagementComponent {

  public materials: any;

  constructor(private materialService: MaterialService, private toast: ToastrService, private router: Router) {
  }

  ngOnInit() {
    this.getAllMaterial()
  }

  ngViewCheck() {

  }
  public handledata() {
    this.getAllMaterial()
  }

  private getAllMaterial(): void {
    this.materialService.getAllmeterial().subscribe((data) => {
      if (data) {
        this.materials = data.fabric
        this.toast.success("get all material success")
      } else {
        this.toast.error("get all user false")
      }
    })
  }

  public handleAddMaterial(queryParams: any) {
    console.log(`aaa`);
    this.materialService.addMaterial(queryParams).subscribe((data) => {
      if (data) {
        alert('Add new material success')
        this.getAllMaterial()
      } else {
        this.toast.error('add new material false')
      }
    })
  }
}
