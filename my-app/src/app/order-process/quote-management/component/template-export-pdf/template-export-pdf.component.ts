import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/order-process/shared/service/order.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-template-export-pdf',
  templateUrl: './template-export-pdf.component.html',
  styleUrls: ['./template-export-pdf.component.less']
})
export class TemplateExportPdfComponent implements OnInit {
  @ViewChild('invoice') invoiceElement!: ElementRef;

  public isOpen: boolean = false;
  public order: any;
  @Input() public orderId: any;

  public isWithinDateRange: boolean = false;
  constructor(private route: ActivatedRoute, public orderService: OrderService, private toast: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
    });
    this.handleDataOrderDetail(this.orderId);
  }

  public toggleDetailUser() {
    this.isOpen = !this.isOpen
  }

  public handleDataOrderDetail(id: any) {
    this.orderService.orderDetail(id).subscribe((data) => {
      if (data.order) {
        this.order = data.order
        console.log(this.order);
        const startDates = this.order.product.map((product: any) => product.startDate)
        const endDates = this.order.product.map((product: any) => product.endDate)
        this.dateSale(startDates, endDates)
      } else {
        this.toast.warning(`Order ${id} not found`)
      }
    })
  }


  public dateSale(startDates: any, endDates: any) {
    const currentDate = new Date();
    startDates = new Date(currentDate);
    endDates = new Date(currentDate)
    if (currentDate >= startDates && currentDate <= endDates) {
      this.isWithinDateRange = true;
    } else {
      this.isWithinDateRange = false;
    }
  }

  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
  }
}
