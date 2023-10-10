import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
  declarations: [
    BannerComponent,
  ],
  imports: [
    CommonModule,
    GalleriaModule
  ],
  exports:[
BannerComponent
  ]
})
export class HomeModule { }
