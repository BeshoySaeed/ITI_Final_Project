import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ImageModule,
    ButtonModule,
    

  ],
  exports:[
    NavbarComponent,
    HeaderComponent,
    FooterComponent,

  ]

})
export class SharedModule { }
