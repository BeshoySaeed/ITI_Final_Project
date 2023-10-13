import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BranchesComponent } from './branches/branches.component';
import { ContactUsComponent } from './Contact Us page/contact-us/contact-us.component';
import { ContactUsFormComponent } from './Contact Us page/contact-us-form/contact-us-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { JobAppComponent } from './job-app/job-app.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ItemComponent } from './menu-module/components/item/item.component';
import { AllItemsComponent } from './menu-module/components/all-items/all-items.component';
import { ItemDetailsComponent } from './menu-module/components/item-details/item-details.component';
import { MenuModuleModule } from './menu-module/menu-module.module';

@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    ContactUsComponent,
    ContactUsFormComponent,
    LoginFormComponent,
    AboutUsComponent,
    NotfoundComponent,
    JobAppComponent,
    BecomePartnerComponent,
    RegisterComponent,
  
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    MenubarModule,
    NoopAnimationsModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    BrowserAnimationsModule,
    FileUploadModule,
    MenuModuleModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
