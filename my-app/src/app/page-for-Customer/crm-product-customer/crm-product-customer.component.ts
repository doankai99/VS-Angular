import { Component } from '@angular/core';
import { ProductService } from 'src/app/product-management/shared/product.service';

@Component({
  selector: 'app-crm-product-customer',
  templateUrl: './crm-product-customer.component.html',
  styleUrls: ['./crm-product-customer.component.less']
})
export class CrmProductCustomerComponent {
  public viewProduct: any;

  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    this.getListProduct()
  }

  public getListProduct() {
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.viewProduct = data.priceOfProducts
      } else {
        alert("lỗi hiển thị product")
      }
    })
  }
}
