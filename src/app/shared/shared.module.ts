import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
// import { GMapModule } from 'primeng/gmap';
import { HttpClientModule } 
    from '@angular/common/http';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ImageModule,
    CarouselModule,
    ButtonModule,
    HttpClientModule,
    

  ],
  exports:[
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ]

})
export class SharedModule { }
