import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-price-of-product',
  templateUrl: './price-of-product.component.html',
  styleUrls: ['./price-of-product.component.less']
})
export class PriceOfProductComponent {

  public priceData: any;
  public productData: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.allPriceOfProducts()
  }
  public handleCallPrice() {
    this.allPriceOfProducts();
  }

  public allPriceOfProducts() {
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.priceData = data.priceOfProducts
      } else {
        alert("lấy thông tin giá sản phẩm thất bại")
      }
    })
  }

  public handleAddPriceforProduct(queryParams: any) {
    this.productService.addPriceforProduct(queryParams).subscribe(() => {
      this.allPriceOfProducts();
      alert("add price for product success")
    })
  }
}
