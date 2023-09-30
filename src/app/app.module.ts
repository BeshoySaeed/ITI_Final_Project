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

@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    ContactUsComponent,
    ContactUsFormComponent,
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
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
