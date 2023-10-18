import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { AppliersComponent } from './appliers/appliers.component';
import { PartnersComponent } from './partners/partners.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { DiscountsComponent } from './discount/discounts/discounts.component';
import { AddDiscountComponent } from './discount/add-discount/add-discount.component';
import { EditDiscountComponent } from './discount/edit-discount/edit-discount.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: 'admin',
    // This layout component will render in apps router-outlet
    component: AppLayoutComponent,
    children: [
      {
        path: 'users',
        children: [
          {
            path: '',
            component: UsersComponent,
          },
          {
            path: 'create',
            component: AddUserComponent,
          },
          {
            path: 'edit/:id',
            component: EditUserComponent,
          },
        ],
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoriesComponent,
          },
          {
            path: 'create',
            component: AddCategoryComponent,
          },
          {
            path: 'edit/:id',
            component: EditCategoryComponent,
          },
        ],
      },
      {
        path: 'discount-codes',
        children: [
          {
            path: '',
            component: DiscountsComponent,
          },
          {
            path: 'create',
            component: AddDiscountComponent,
          },
          {
            path: 'edit/:id',
            component: EditDiscountComponent,
          },
        ],
      },
      {
        path: 'employees',
        children: [
          {
            path: '',
            component: EmployeesComponent,
          },
          {
            path: 'create',
            component: AddEmployeeComponent,
          },
          {
            path: 'edit/:id',
            component: EditEmployeeComponent,
          },
        ],
      },
      {
        path: "feedback",
        component: FeedbackComponent
      },
      {
        path: "contact-us-appliers",
        component: AppliersComponent
      },
      {
        path: "partners",
        component: PartnersComponent
      },
      {
        path: "job-applicants",
        component: ApplicantsComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
