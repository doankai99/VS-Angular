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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'management-order', component: ManagementOrderComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'price-of-products', component: PriceOfProductComponent },
  {
    path: 'material-management',
    component: MaterialManagementComponent,
    children: [

    ]
  },
  { path: 'add-order', component: NewOrderComponent },
  { path: 'add-customer', component: CreateNewCustomerComponent },
  { path: 'new-order', component: NewOrderComponent },
  { path: 'quote-management', component: QuoteManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list-account', component: ListAccountComponent },
  { path: 'add-material', component: AddMaterialComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'homeCustomer', component: HomepageComponent },
  { path: 'customer-profile', component: ViewProfileCustomerComponent },
  { path: 'crm-product', component: CrmProductCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
