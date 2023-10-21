import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { materialRequestPayload } from "../payload/material-Request.payload";
import { addMaterialPayload } from "../add-material/add-material.payload";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private httpClient: HttpClient) { }

  public getAllmeterial(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/v1/fabric/allFabric')
  }

  public addMaterial(addMaterial: addMaterialPayload): Observable<any> {
    return this.httpClient.post("http://localhost:8080/v1/fabric/addFabric", addMaterial)
  }

  public editMaterial(queryParams: any, id: string) {
    return this.httpClient.put(`http://localhost:8080/v1/fabric/updateFabric/${id}`, queryParams)
  }

  public deleteMaterial(id: any): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/v1/fabric/delete/${id}`)
  }
}
