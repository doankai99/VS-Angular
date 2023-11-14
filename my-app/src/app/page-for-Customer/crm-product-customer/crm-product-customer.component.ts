import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/product-management/shared/product.service';

@Component({
  selector: 'app-crm-product-customer',
  templateUrl: './crm-product-customer.component.html',
  styleUrls: ['./crm-product-customer.component.less']
})
export class CrmProductCustomerComponent {
  public viewProduct: any;
  public isWithinDateRange: boolean = false;
  public startDates: any;
  public endDates: any;

  constructor(private productService: ProductService, private toast: ToastrService) {

  }
  ngOnInit() {
    this.getListProduct()
  }

  public dateSale(startDate: Date, endDate: Date): boolean {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (currentDate >= start && currentDate <= end) {
      return true;
    } else {
      return false;
    }
  }

  public getListProduct() {
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.viewProduct = data.priceOfProducts
        this.startDates = data.priceOfProducts.map((product: any) => product.startDate);
        this.endDates = data.priceOfProducts.map((product: any) => product.endDate);
        // this.dateSale(this.startDates[0], this.endDates[0]);
      } else {
        alert("lỗi hiển thị product")
      }
    })
  }
}
