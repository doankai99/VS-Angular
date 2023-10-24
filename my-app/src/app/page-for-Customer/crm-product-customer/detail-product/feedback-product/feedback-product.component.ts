import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from 'src/app/page-for-Customer/shared/service/feedback.service';

@Component({
  selector: 'app-feedback-product',
  templateUrl: './feedback-product.component.html',
  styleUrls: ['./feedback-product.component.less']
})
export class FeedbackProductComponent {
  public avatar: any;
  public userId: any;
  public feedback: any;
  currentPage: number = 1;
  public currentFeedback: number = 3
  @Input() public productId: any;
  public form !: FormGroup;

  constructor(private feedbackService: FeedbackService, private toast: ToastrService) { }

  ngOnInit() {
    this.avatar = localStorage.getItem('image')
    this.userId = localStorage.getItem('id')
    this.setForm();
    this.handleShowFeedback()
  }

  public setForm() {
    this.form = new FormGroup({
      product: new FormControl(this.productId),
      description: new FormControl(''),
    })
  }

  public sendFeedback(): void {
    const params = {
      product: this.form.controls['product']?.value,
      description: this.form.controls['description']?.value,
    }
    this.handleSendFeedback(params)
  }

  public handleShowFeedback(): void {
    const id = this.productId
    this.feedbackService.showFeedback(id).subscribe((data) => {
      if (data) {
        this.feedback = data.feedback
      }
      this.calculateTimeSend();
    })
  }

  public handleSendFeedback(param: any): void {
    const id = this.userId
    this.feedbackService.sendFeedback(id, param).subscribe((data) => {
      if (data) {
        this.handleShowFeedback();
        this.toast.success('Thks you feedback about product')
      } else {
        this.toast.error('data.message')
      }
    })
  }

  public calculateTimeSend(): void {

  }

  public handleShowAllComment(data: any): void {
    this.currentFeedback = data.length
  }
}
