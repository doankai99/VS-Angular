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
  public startDate!: Date;
  public endDate!: Date;

  constructor(private route: ActivatedRoute, private productService: ProductService, private toast: ToastrService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productid = params['id'];
    });
    this.detailProduct();
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

  public detailProduct(): void {
    const id = this.productid
    this.productService.detailPriceOfProduct(id).subscribe((data) => {
      if (data) {
        this.productDetail = data.detailPriceProduct
        this.startDate = new Date(this.productDetail.startDate);
        this.endDate = new Date(this.productDetail.endDate);
        this.dateSale(this.startDate, this.endDate);
      } else {
        this.toast.error("K tìm thấy product")
      }
    })
  }
}
