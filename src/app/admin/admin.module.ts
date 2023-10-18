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
import { DropdownModule } from 'primeng/dropdown';
import { CategoriesComponent } from './categories/categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { MenuItemsComponent } from './menu-items/menu-items/menu-items.component';
import { AddMenuItemsComponent } from './menu-items/add-menu-items/add-menu-items.component';
import { EditMenuItemsComponent } from './menu-items/edit-menu-items/edit-menu-items.component';

import { Active, PhoneComponent } from './contactus/phones/phone/phone.component';
import { EditPhoneComponent } from './contactus/phones/edit-phone/edit-phone.component';
import { AddPhoneComponent } from './contactus/phones/add-phone/add-phone.component';
import { AddEmailComponent } from './contactus/emails/add-email/add-email.component';
import { EditEmailComponent } from './contactus/emails/edit-email/edit-email.component';
import { EmailComponent } from './contactus/emails/email/email.component';
import { SocialComponent } from './contactus/social/social/social.component';
import { EditSocialComponent } from './contactus/social/edit-social/edit-social.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    NotFoundComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    MenuItemsComponent,
    AddMenuItemsComponent,
    EditMenuItemsComponent,
    PhoneComponent,
    EditPhoneComponent,
    AddPhoneComponent,
    AddEmailComponent,
    EditEmailComponent,
    EmailComponent,
    SocialComponent,
    EditSocialComponent,
    Active
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
    DropdownModule,
    FileUploadModule,
    PasswordModule,
    ToggleButtonModule
  ],
})
export class AdminModule {}
