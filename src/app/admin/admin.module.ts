import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { UsersComponent } from './users/users/users.component';

import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AdminRoutingModule } from './admin-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { AddUserComponent } from './users/add-user/add-user.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    NotFoundComponent,
  ],

  imports: [
    CommonModule, 
    AdminRoutingModule,
    MenubarModule, 
    SidebarModule,
    ButtonModule,
    LayoutModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
