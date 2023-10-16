import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AdminRoutingModule,
    UserRoutingModule,
    SharedModule,
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MenubarModule,
    NoopAnimationsModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    BrowserAnimationsModule,
    FileUploadModule,
    TableModule,
    
    AdminModule,
    UserModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
