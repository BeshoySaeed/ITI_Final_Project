import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { UsersComponent } from './users/users/users.component';

import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    UsersComponent, 
  ],

  imports: [
    CommonModule, 
    MenubarModule, 
    SidebarModule,
    ButtonModule,
    LayoutModule
  ],

  exports: [
    LayoutModule
  ],
})
export class AdminModule {}
