import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { GalleriaModule } from 'primeng/galleria';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { PartnerComponent } from './partner/partner.component'
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    BannerComponent,
    CategoryComponent,
    PartnerComponent,
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports:[
BannerComponent,
CategoryComponent,
PartnerComponent
  ]
})
export class HomeModule { }
