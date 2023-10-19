import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
  ],
  
  imports: [
    CommonModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    BrowserModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
