import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHeaderComponent } from './layouts/admin-header/admin-header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { UsersComponent } from './users/users/users.component';

import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    SidebarComponent, 
    UsersComponent, 
    AdminHeaderComponent
  ],

  imports: [
    CommonModule, 
    MenubarModule, 
    SidebarModule,
    ButtonModule
  ],

  exports: [
    AdminHeaderComponent
  ],
})
export class AdminModule {}
