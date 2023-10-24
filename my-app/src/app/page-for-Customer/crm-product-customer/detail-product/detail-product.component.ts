import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/product-management/shared/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.less']
})
export class DetailProductComponent {
  public productid: any;
  public productDetail: any;
  public activeTab: string = 'A'
  public isWithinDateRange: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService, private toast: ToastrService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productid = params['id'];
    });
    this.detailProduct();
  }

  public dateSale(startDate: Date, endDate: Date) {
    const currentDate = new Date();
    startDate = new Date(currentDate)
    endDate = new Date(currentDate)
    if (currentDate >= startDate && currentDate <= endDate) {
      this.isWithinDateRange = true;
    } else {
      this.isWithinDateRange = false;
    }
  }

  public detailProduct(): void {
    const id = this.productid
    this.productService.detailPriceOfProduct(id).subscribe((data) => {
      if (data) {
        this.productDetail = data.detailPriceProduct
        const startDate = new Date(this.productDetail[0]?.startDate);
        const endDate = new Date(this.productDetail[0]?.endDate);
        this.dateSale(startDate, endDate);
      } else {
        this.toast.error("K tìm thấy product")
      }
    })
  }
}
