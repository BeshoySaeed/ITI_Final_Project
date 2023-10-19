import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TagModule } from 'primeng/tag';

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
    BrowserModule,
    ToggleButtonModule,
    TagModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
