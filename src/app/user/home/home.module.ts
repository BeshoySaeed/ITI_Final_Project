import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { GalleriaModule } from 'primeng/galleria';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OfferSectionComponent } from './offer-section/offer-section.component';
import { SubscriptionSectionComponent } from './subscription-section/subscription-section.component';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { PartnerComponent } from './partner/partner.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    BannerComponent,
    MenuSectionComponent,
    MenuSectionComponent,
    OfferSectionComponent,
    SubscriptionSectionComponent,
    CategoryComponent,
    PartnerComponent,
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    CardModule,
    RouterLink,
    RouterModule,
    CarouselModule,
  ],
  exports: [
    BannerComponent,
    MenuSectionComponent,
    OfferSectionComponent,
    SubscriptionSectionComponent,
    BrowserAnimationsModule,
    ButtonModule,
    BannerComponent,
    CategoryComponent,
    PartnerComponent,
    CarouselModule,
  ],
})
export class HomeModule {}
