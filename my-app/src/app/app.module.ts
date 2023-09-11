import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ManagementOrderComponent } from './management-order/management-order/management-order.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { CustomerManagementComponent } from './customer-management/customer-management/customer-management.component';
import { ProductManagementComponent } from './product-management/product-management/product-management.component';
import { MaterialManagementComponent } from './material-management/material-management/material-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NewOrderComponent } from './order-process/new-order/new-order.component';
import { GridColumnComponent } from './shared/grid-column/grid-column.component';
import { QuoteManagementComponent } from './order-process/quote-management/quote-management.component';
import { MatMenuModule } from '@angular/material/menu';
import { EditCustomerInformationComponent } from './customer-management/edit-customer-information/edit-customer-information.component';
import { CreateNewCustomerComponent } from './customer-management/create-new-customer/create-new-customer.component';
import { FormsModule } from '@angular/forms';
import { AddBodyMeasurementsComponent } from './customer-management/create-new-customer/add-body-measurements/add-body-measurements.component';
import { ProfileComponent } from './profile/profile.component';
import { ToastrModule } from "ngx-toastr";
import { ListAccountComponent } from './auth/list-account/list-account.component';
import { AddMaterialComponent } from './material-management/add-material/add-material.component';
import { EditMaterialComponent } from './material-management/edit-material/edit-material.component';
import { MaterialComponent } from './material-management/material/material.component';
import { FilterManagementAccountComponent } from './shared/filter-management-account/filter-management-account.component';
import { PopUpManagementOrderComponent } from './management-order/pop-up-management-order/pop-up-management-order.component';
import { FilterProductComponent } from './shared/filter-product/filter-product.component';
import { FilterMaterialComponent } from './shared/filter-material/filter-material.component';
import { DetailUserComponent } from './auth/shared/detail-user/detail-user.component';
import { AddNewUserComponent } from './auth/shared/add-new-user/add-new-user.component';
import { AddNewProductComponent } from './product-management/shared/add-new-product/add-new-product.component';
import { PriceOfProductComponent } from './product-management/price-of-product/price-of-product.component';
import { AddPriceComponent } from './product-management/shared/add-price/add-price.component';
import { UpdateDeletePriceComponent } from './product-management/shared/update-delete-price/update-delete-price.component';
import { UpdateDeleteProductComponent } from './product-management/shared/update-delete-product/update-delete-product.component';
import { HomepageComponent } from './page-for-Customer/homepage/homepage.component';
import { MenuCustomerComponent } from './page-for-Customer/menu-customer/menu-customer.component';
import { SignUpCustomerComponent } from './auth/sign-up-customer/sign-up-customer.component';
import { LoginCustomerComponent } from './auth/login-customer/login-customer.component';
import { ViewProfileCustomerComponent } from './page-for-Customer/view-profile-customer/view-profile-customer.component';
import { CrmProductCustomerComponent } from './page-for-Customer/crm-product-customer/crm-product-customer.component';
// import { LocalStorageService } from './path-to-local-storage-service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagementOrderComponent,
    MenuComponent,
    HomeComponent,
    ForgotPasswordComponent,
    CustomerManagementComponent,
    ProductManagementComponent,
    MaterialManagementComponent,
    NewOrderComponent,
    GridColumnComponent,
    QuoteManagementComponent,
    EditCustomerInformationComponent,
    CreateNewCustomerComponent,
    AddBodyMeasurementsComponent,
    ProfileComponent,
    ListAccountComponent,
    AddMaterialComponent,
    EditMaterialComponent,
    MaterialComponent,
    FilterManagementAccountComponent,
    PopUpManagementOrderComponent,
    FilterProductComponent,
    FilterMaterialComponent,
    DetailUserComponent,
    AddNewUserComponent,
    AddNewProductComponent,
    PriceOfProductComponent,
    AddPriceComponent,
    UpdateDeletePriceComponent,
    UpdateDeleteProductComponent,
    HomepageComponent,
    MenuCustomerComponent,
    SignUpCustomerComponent,
    LoginCustomerComponent,
    ViewProfileCustomerComponent,
    CrmProductCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    // LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
