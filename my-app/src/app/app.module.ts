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
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
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
import { ToastrModule, provideToastr } from "ngx-toastr";
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
import { AboutUsComponent } from './page-for-Customer/shared/component/about-us/about-us.component';
import { LearnMoveTechniqueComponent } from './page-for-Customer/shared/component/learn-move-technique/learn-move-technique.component';
import { VestScraftCareComponent } from './page-for-Customer/shared/component/vest-scraft-care/vest-scraft-care.component';
import { InStoreOrderComponent } from './page-for-Customer/services/in-store-order/in-store-order.component';
import { OnlineOrderComponent } from './page-for-Customer/services/online-order/online-order.component';
import { SettingInfoComponent } from './page-for-Customer/view-profile-customer/setting-info/setting-info.component';
import { AuthInterceptor } from './token-interceptor';
import { HeaderComponent } from './shared/component/header/header.component';
import { SettingComponent } from './profile/setting/setting.component';
import { FooterComponent } from './page-for-Customer/homepage/footer/footer.component';
import { ThirdPartyComponent } from './page-for-Customer/shared/component/third-party/third-party.component';
import { ServiceHomepageComponent } from './page-for-Customer/shared/component/service-homepage/service-homepage.component';
import { WhatWeDoSectionComponent } from './page-for-Customer/shared/component/what-we-do-section/what-we-do-section.component';
import { HeaderCustomerComponent } from './page-for-Customer/homepage/header-customer/header-customer.component';
import { OurExpertsComponent } from './page-for-Customer/homepage/our-experts/our-experts.component';
import { BodyMeasurementComponent } from './shared/component/body-measurement/body-measurement.component';
import { DoorToDoorComponent } from './page-for-Customer/services/door-to-door/door-to-door.component';
import { ContactUsComponent } from './page-for-Customer/contact-us/contact-us.component';
import { ListBookedAppointmentComponent } from './page-for-Customer/view-profile-customer/list-booked-appointment/list-booked-appointment.component';
import { CommonModule, DatePipe } from '@angular/common';
import { DetailProductComponent } from './page-for-Customer/crm-product-customer/detail-product/detail-product.component';
import { SettingBodyMeasurementComponent } from './page-for-Customer/shared/component/setting-body-measurement/setting-body-measurement.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { UpdateDeleteSupplierComponent } from './supplier-management/shared/component/update-delete-supplier/update-delete-supplier.component';
import { AddNewSupplierComponent } from './supplier-management/shared/component/add-new-supplier/add-new-supplier.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DraftOrderComponent } from './order-process/draft-order/draft-order.component';
import { EditConfirmOrderInactiveComponent } from './order-process/draft-order/edit-confirm-order-inactive/edit-confirm-order-inactive.component';
import { TranslateStatusPipe } from './order-process/shared/component/translateStatus.pipe';
import { CustomerOrderComponent } from './page-for-Customer/crm-product-customer/detail-product/customer-order/customer-order.component';
import { TranslateGenderPipe } from './shared/tranforms/translateGender.pipe';
import { TranslateStatusAppointmentPipe } from './shared/tranforms/translateStatusAppointment.pipe';
import { OrderDetailComponent } from './page-for-Customer/crm-product-customer/detail-product/order-detail/order-detail.component';
import { TranslateShippingMethodPipe } from './shared/tranforms/translateShippingMethod.pipe';
import { CustomerMyOrderComponent } from './page-for-Customer/view-profile-customer/customer-my-order/customer-my-order.component';
import { OrderDetailCustomerComponent } from './page-for-Customer/view-profile-customer/order-detail-customer/order-detail-customer.component';
import { AppointmentManagementComponent } from './appointment-management/appointment-management.component';
import { AppointmentActiveInactiveComponent } from './appointment-management/component/appointment-active-inactive/appointment-active-inactive.component';
import { HistoryAppointmentComponent } from './appointment-management/component/history-appointment/history-appointment.component';
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
    CrmProductCustomerComponent,
    AboutUsComponent,
    LearnMoveTechniqueComponent,
    VestScraftCareComponent,
    InStoreOrderComponent,
    OnlineOrderComponent,
    SettingInfoComponent,
    HeaderComponent,
    SettingComponent,
    FooterComponent,
    ThirdPartyComponent,
    ServiceHomepageComponent,
    WhatWeDoSectionComponent,
    HeaderCustomerComponent,
    OurExpertsComponent,
    BodyMeasurementComponent,
    DoorToDoorComponent,
    ContactUsComponent,
    ListBookedAppointmentComponent,
    DetailProductComponent,
    SettingBodyMeasurementComponent,
    SupplierManagementComponent,
    UpdateDeleteSupplierComponent,
    AddNewSupplierComponent,
    DraftOrderComponent,
    EditConfirmOrderInactiveComponent,
    TranslateStatusPipe,
    TranslateGenderPipe,
    TranslateStatusAppointmentPipe,
    TranslateShippingMethodPipe,
    CustomerOrderComponent,
    OrderDetailComponent,
    CustomerMyOrderComponent,
    OrderDetailCustomerComponent,
    AppointmentManagementComponent,
    AppointmentActiveInactiveComponent,
    HistoryAppointmentComponent
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
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    DatePipe,
    provideAnimations(),
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
