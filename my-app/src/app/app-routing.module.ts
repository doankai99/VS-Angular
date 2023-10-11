import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ManagementOrderComponent } from './management-order/management-order/management-order.component';
import { CustomerManagementComponent } from './customer-management/customer-management/customer-management.component';
import { ProductManagementComponent } from './product-management/product-management/product-management.component';
import { MaterialManagementComponent } from './material-management/material-management/material-management.component';
import { NewOrderComponent } from './order-process/new-order/new-order.component';
import { CreateNewCustomerComponent } from './customer-management/create-new-customer/create-new-customer.component';
import { QuoteManagementComponent } from './order-process/quote-management/quote-management.component';
import { ProfileComponent } from './profile/profile.component';
import { ListAccountComponent } from "./auth/list-account/list-account.component";
import { AddMaterialComponent } from "./material-management/add-material/add-material.component";
import { PriceOfProductComponent } from './product-management/price-of-product/price-of-product.component';
import { HomepageComponent } from './page-for-Customer/homepage/homepage.component';
import { ViewProfileCustomerComponent } from './page-for-Customer/view-profile-customer/view-profile-customer.component';
import { CrmProductCustomerComponent } from './page-for-Customer/crm-product-customer/crm-product-customer.component';
import { LearnMoveTechniqueComponent } from './page-for-Customer/shared/component/learn-move-technique/learn-move-technique.component';
import { VestScraftCareComponent } from './page-for-Customer/shared/component/vest-scraft-care/vest-scraft-care.component';
import { AboutUsComponent } from './page-for-Customer/shared/component/about-us/about-us.component';
import { InStoreOrderComponent } from './page-for-Customer/services/in-store-order/in-store-order.component';
import { SettingComponent } from './profile/setting/setting.component';
import { OnlineOrderComponent } from './page-for-Customer/services/online-order/online-order.component';
import { ContactUsComponent } from './page-for-Customer/contact-us/contact-us.component';
import { DoorToDoorComponent } from './page-for-Customer/services/door-to-door/door-to-door.component';
import { ListBookedAppointmentComponent } from './page-for-Customer/view-profile-customer/list-booked-appointment/list-booked-appointment.component';
import { DetailProductComponent } from './page-for-Customer/crm-product-customer/detail-product/detail-product.component';
import { SignUpCustomerComponent } from './auth/sign-up-customer/sign-up-customer.component';
import { SettingBodyMeasurementComponent } from './page-for-Customer/shared/component/setting-body-measurement/setting-body-measurement.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { DraftOrderComponent } from './order-process/draft-order/draft-order.component';
import { OrderDetailComponent } from './page-for-Customer/crm-product-customer/detail-product/order-detail/order-detail.component';
import { OrderDetailCustomerComponent } from './page-for-Customer/view-profile-customer/order-detail-customer/order-detail-customer.component';
import { AppointmentActiveInactiveComponent } from './appointment-management/component/appointment-active-inactive/appointment-active-inactive.component';
import { AppointmentManagementComponent } from './appointment-management/appointment-management.component';
import { TemplateExportPdfComponent } from './order-process/quote-management/component/template-export-pdf/template-export-pdf.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  //Router Link admin and staff
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'management-order', component: ManagementOrderComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'price-of-products', component: PriceOfProductComponent },
  { path: 'add-order', component: NewOrderComponent },
  { path: 'add-customer', component: CreateNewCustomerComponent },
  { path: 'new-order', component: NewOrderComponent },
  { path: 'order/draft-order', component: DraftOrderComponent },
  { path: 'quote-management', component: QuoteManagementComponent },
  { path: 'Generatepdf/:id', component: TemplateExportPdfComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list-account', component: ListAccountComponent },
  { path: 'material-management', component: MaterialManagementComponent },
  { path: 'supplier-management', component: SupplierManagementComponent },
  { path: 'appointment-management', component: AppointmentManagementComponent },

  //Router link Customer
  { path: 'sign-up', component: SignUpCustomerComponent },
  { path: 'homeCustomer', component: HomepageComponent },
  { path: 'online-order', component: OnlineOrderComponent },
  { path: 'order/order-detail/:id', component: OrderDetailComponent },
  { path: 'customer-profile', component: ViewProfileCustomerComponent },
  { path: 'crm-product', component: CrmProductCustomerComponent },
  { path: 'learn-move-tecnique', component: LearnMoveTechniqueComponent },
  { path: 'vestScraft-care', component: VestScraftCareComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'in-store-order', component: InStoreOrderComponent },
  { path: 'door-to-door', component: DoorToDoorComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'appointment', component: ListBookedAppointmentComponent },
  { path: `detail-product/:id`, component: DetailProductComponent },
  { path: `setting-body-measurement/:id`, component: SettingBodyMeasurementComponent },
  { path: `order/:id/order-detail`, component: OrderDetailCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
