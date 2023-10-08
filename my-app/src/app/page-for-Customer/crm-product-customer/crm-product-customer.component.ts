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

  constructor(private productService: ProductService, private toast: ToastrService) {

  }
  ngOnInit() {
    this.getListProduct()
  }

  public dateSale(startDate: Date, endDate: Date) {
    const currentDate = new Date();
    startDate = new Date(currentDate);
    endDate = new Date(currentDate)
    if (currentDate >= startDate && currentDate <= endDate) {
      this.isWithinDateRange = true;
    } else {
      this.isWithinDateRange = false;
    }
  }

  public getListProduct() {
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.viewProduct = data.priceOfProducts
        const startDates = data.priceOfProducts.map((product: any) => product.startDate);
        const endDates = data.priceOfProducts.map((product: any) => product.endDate);
        this.dateSale(startDates, endDates);
      } else {
        alert("lỗi hiển thị product")
      }
    })
  }
}
