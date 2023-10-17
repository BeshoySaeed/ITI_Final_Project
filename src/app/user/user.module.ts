import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { PaymentModule } from './payment/payment.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BranchesComponent } from './branches/branches.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { ButtonModule } from 'primeng/button';
import { HomeModule } from './home/home.module';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactUsFormComponent } from './Contact Us page/contact-us-form/contact-us-form.component';
import { ContactUsComponent } from './Contact Us page/contact-us/contact-us.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { NotfoundComponent } from './notfound/notfound.component';
import { JobAppComponent } from './job-app/job-app.component';
import { CartModuleModule } from './cart-module/cart-module.module';
import { MenuModuleModule } from './menu-module/menu-module.module';
import { SharedModule } from './shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';

@NgModule({
  declarations: [
    BranchesComponent,
    ContactUsComponent,
    ContactUsFormComponent,
    LoginFormComponent,
    AboutUsComponent,
    NotfoundComponent,
    JobAppComponent,
    BecomePartnerComponent,
    RegisterComponent,
    HomeComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaymentModule,
    ButtonModule,
    HomeModule,
    InputTextModule,
    InputMaskModule,
    CartModuleModule,
    MenuModuleModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FileUploadModule,
    TableModule,
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }