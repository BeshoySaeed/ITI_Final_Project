import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
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
