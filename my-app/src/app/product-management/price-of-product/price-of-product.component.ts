import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-price-of-product',
  templateUrl: './price-of-product.component.html',
  styleUrls: ['./price-of-product.component.less']
})
export class PriceOfProductComponent {

  public isLoading: boolean = false;
  public priceData: any;
  public productData: any;
  currentPage: number = 1;
  pageSize: number = 3;

  constructor(private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.allPriceOfProducts()
  }
  public handleCallPrice() {
    this.isLoading = false;
    this.allPriceOfProducts();
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.priceData.length) {
      this.currentPage++;
    }
  }

  public allPriceOfProducts() {
    this.isLoading = true;
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.priceData = data.priceOfProducts
      } else {
        alert("lấy thông tin giá sản phẩm thất bại")
      }
      this.isLoading = false;
    })
  }

  public handleAddPriceforProduct(queryParams: any): void {
    this.isLoading = true;
    this.productService.addPriceforProduct(queryParams).subscribe(() => {
      this.allPriceOfProducts();
      this.toastrService.success('Add price for product success')
      // alert("add price for product success")
      this.isLoading = false;
    })
  }
}
