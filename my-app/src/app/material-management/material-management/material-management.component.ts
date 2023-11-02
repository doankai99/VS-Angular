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

  public isLoading: boolean = false;
  public materials: any;
  public currentPage: number = 1;
  public pageSize: number = 3;
  public isAdmin: any;

  constructor(private materialService: MaterialService, private toast: ToastrService, private router: Router) {
  }

  ngOnInit() {
    this.isAdmin = Number(localStorage.getItem('isAdmin'))
    this.getAllMaterial()
  }

  ngViewCheck() {

  }
  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.materials.length) {
      this.currentPage++;
    }
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
    this.isLoading = true;
    this.materialService.addMaterial(queryParams).subscribe((data) => {
      if (data) {
        this.getAllMaterial()
        this.toast.success('Add new material success')
      } else {
        this.toast.error('add new material false')
      }
      this.isLoading = false;
    })
  }
}
