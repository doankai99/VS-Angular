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
  public isWithinDateRange: boolean = false;

  public priceData: any;
  public productData: any;
  currentPage: number = 1;
  pageSize: number = 4;
  public isAdmin: any;

  public currentDate: Date = new Date();
  public startDates: any;
  public endDates: any;

  constructor(private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.isAdmin = Number(localStorage.getItem('isAdmin'))
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

  public dateSale(startDate: Date, endDate: Date): boolean {
    const currentDate = new Date();
    console.log(currentDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    console.log(startDate);
    console.log(endDate);
    if (currentDate >= start && currentDate <= end) {
      return true;
    } else {
      return false;
    }
  }

  public allPriceOfProducts() {
    this.isLoading = true;
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.priceData = data.priceOfProducts
        this.startDates = data.priceOfProducts.map((product: any) => product.startDate);
        this.endDates = data.priceOfProducts.map((product: any) => product.endDate);
        this.dateSale(this.startDates, this.endDates);
      } else {
        this.toastrService.success('Lấy thông tin giá sản phẩm thất bại')
      }
      this.isLoading = false;
    })
  }

  public handleAddPriceforProduct(queryParams: any): void {
    this.isLoading = true;
    this.productService.addPriceforProduct(queryParams).subscribe(() => {
      this.allPriceOfProducts();
      this.toastrService.success('Thêm giá cho sản phẩm thành công')
      this.isLoading = false;
    })
  }

}
