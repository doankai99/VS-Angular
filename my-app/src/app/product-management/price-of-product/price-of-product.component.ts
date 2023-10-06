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

  public currentDate: Date = new Date();

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

  public dateSale(startDate: Date, endDate: Date) {
    console.log(startDate);
    console.log(endDate);

    const currentDate = new Date();
    if (currentDate >= startDate && currentDate <= endDate) {
      this.isWithinDateRange = true;
    } else {
      this.isWithinDateRange = false;
    }
  }

  public allPriceOfProducts() {
    this.isLoading = true;
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.priceData = data.priceOfProducts
        const startDate = new Date(data.priceOfProducts?.startDate);
        const endDate = new Date(data.priceOfProducts?.endDate);

        this.dateSale(startDate, endDate);
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
