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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'management-order', component: ManagementOrderComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'price-of-products', component: PriceOfProductComponent },
  { path: 'online-order', component: OnlineOrderComponent },
  { path: 'add-order', component: NewOrderComponent },
  { path: 'add-customer', component: CreateNewCustomerComponent },
  { path: 'new-order', component: NewOrderComponent },
  { path: 'quote-management', component: QuoteManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list-account', component: ListAccountComponent },
  { path: 'material-management', component: MaterialManagementComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'homeCustomer', component: HomepageComponent },
  { path: 'customer-profile', component: ViewProfileCustomerComponent },
  { path: 'crm-product', component: CrmProductCustomerComponent },
  { path: 'learn-move-tecnique', component: LearnMoveTechniqueComponent },
  { path: 'vestScraft-care', component: VestScraftCareComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'in-store-order', component: InStoreOrderComponent },
  { path: 'door-to-door', component: DoorToDoorComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'appointment', component: ListBookedAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
