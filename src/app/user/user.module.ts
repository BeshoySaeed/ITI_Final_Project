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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDataComponent } from './user-profile/user-data/user-data.component';
import { UserSubscriptionComponent } from './user-profile/user-subscription/user-subscription.component';
import { UserHistoryComponent } from './user-profile/user-history/user-history.component';
import { UserFavComponent } from './user-profile/user-fav/user-fav.component';
import { MessagesModule } from 'primeng/messages';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
<<<<<<< HEAD
import { RatingModule } from 'primeng/rating';
import { RatingComponent } from './rating/rating.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
=======
import { TooltipModule } from "primeng/tooltip"; 
>>>>>>> origin/edit-front


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
    UserLayoutComponent,
    UserProfileComponent,
    UserDataComponent,
    UserSubscriptionComponent,
    UserHistoryComponent,
    UserFavComponent,
    NewPasswordComponent,
    ForgetPasswordComponent,
    RatingComponent
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
    MessagesModule,
<<<<<<< HEAD
    RatingModule,
    InputTextareaModule
    
=======
    TooltipModule
>>>>>>> origin/edit-front
  ]
})
export class UserModule { }
