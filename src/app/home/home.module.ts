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

@NgModule({
  declarations: [
    BannerComponent,
    MenuSectionComponent,
    MenuSectionComponent,
    OfferSectionComponent,
    SubscriptionSectionComponent,
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    CardModule,
    RouterLink,
    RouterModule,
  ],
  exports: [
    BannerComponent,
    MenuSectionComponent,
    OfferSectionComponent,
    SubscriptionSectionComponent,
  ],
})
export class HomeModule {}
