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
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AppliersComponent } from './appliers/appliers.component';
import { PartnersComponent } from './partners/partners.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { AddDiscountComponent } from './discount/add-discount/add-discount.component';
import { EditDiscountComponent } from './discount/edit-discount/edit-discount.component';
import { DiscountsComponent } from './discount/discounts/discounts.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    NotFoundComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    FeedbackComponent,
    AppliersComponent,
    PartnersComponent,
    ApplicantsComponent,
    AddDiscountComponent,
    EditDiscountComponent,
    DiscountsComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
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
    ToggleButtonModule,
    TagModule
  ],
})
export class AdminModule {}
