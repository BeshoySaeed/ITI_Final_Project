import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TagModule } from 'primeng/tag';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { UserModule } from './user/user.module';
import { HeaderDataInterceptor } from './interceptors/header-data.interceptor';

@NgModule({
  declarations: [AppComponent],

  imports: [
    CommonModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    BrowserModule,
    ToggleButtonModule,
    TagModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    ButtonModule,
    RatingModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderDataInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
