import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getAllProduct(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/product/getAllProduct')
  }

  public addProduct(queryParams: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/v1/product/addNewProduct', queryParams);
  }

  public deleteProduct(productId: any) {
    return this.httpClient.delete(`http://localhost:8080/v1/product/delete/${productId}`)
  }

  public getAllPriceOfPriduct(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/v1/price/getAllPriceProduct')
  }

  public detailPriceOfProduct(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/v1/price/detailPriceOfProduct/${id}`)
  }

  public addPriceforProduct(queryParams: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/v1/price/addPrice', queryParams)
  }

  public updatePrice(queryParams: any, id: string): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/v1/price/updatePriceProduct/${id}`, queryParams)
  }

  public deletePrice(id: any): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/v1/price/deletePrice/${id}`)
  }

}
