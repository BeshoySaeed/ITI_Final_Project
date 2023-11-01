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
import { MenuItemsComponent } from './menu-items/menu-items/menu-items.component';
import { EditMenuItemsComponent } from './menu-items/edit-menu-items/edit-menu-items.component';
import { AddMenuItemsComponent } from './menu-items/add-menu-items/add-menu-items.component';
import { PhoneComponent } from './contactus/phones/phone/phone.component';
import { EmailComponent } from './contactus/emails/email/email.component';
import { SocialComponent } from './contactus/social/social/social.component';
import { EditPhoneComponent } from './contactus/phones/edit-phone/edit-phone.component';
import { EditEmailComponent } from './contactus/emails/edit-email/edit-email.component';
import { EditSocialComponent } from './contactus/social/edit-social/edit-social.component';
import { AdditionsComponent } from './additions/additions/additions.component';
import { AddAdditionComponent } from './additions/add-addition/add-addition.component';
import { EditAdditionComponent } from './additions/edit-addition/edit-addition.component';
import { OrdersComponent } from './orders/orders.component';
import { AddPhoneComponent } from './contactus/phones/add-phone/add-phone.component';
import { AddEmailComponent } from './contactus/emails/add-email/add-email.component';
import { BranchesComponent } from './branches/branches/branches.component';
import { AddBranchesComponent } from './branches/add-branches/add-branches.component';
import { EditBranchesComponent } from './branches/edit-branches/edit-branches.component';
import { SubscribeComponent } from './subscribe/subscribe/subscribe.component';
import { AddSubscribeComponent } from './subscribe/add-subscribe/add-subscribe.component';
import { EditSubscribeComponent } from './subscribe/edit-subscribe/edit-subscribe.component';
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
import { AdminGuardService } from '../Guards/Admin/admin-guard.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'admin',
    // This layout component will render in apps router-outlet
    component: AppLayoutComponent,
    canActivate: [AdminGuardService],
    children: [
      {
        path: 'orders',
        component: OrdersComponent,
      },
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
        path: 'menu-items',
        children: [
          {
            path: '',
            component: MenuItemsComponent,
          },
          {
            path: 'create',
            component: AddMenuItemsComponent,
          },
          {
            path: 'edit/:id',
            component: EditMenuItemsComponent,
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
        path: 'additions',
        children: [
          {
            path: '',
            component: AdditionsComponent,
          },
          {
            path: 'create',
            component: AddAdditionComponent,
          },
          {
            path: 'edit/:id',
            component: EditAdditionComponent,
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
        path: 'contact-us-info',
        children: [
          {
            path: 'phones',
            component: PhoneComponent,
          },
          {
            path: 'emails',
            component: EmailComponent,
          },
          {
            path: 'social-media-accounts',
            component: SocialComponent,
          },
          {
            path: 'phones/edit/:id',
            component: EditPhoneComponent,
          },
          {
            path: 'emails/edit/:id',
            component: EditEmailComponent,
          },
          {
            path: 'social/edit/:id',
            component: EditSocialComponent,
          },
          {
            path: 'phones/create',
            component: AddPhoneComponent,
          },
          {
            path: 'emails/create',
            component: AddEmailComponent,
          },
        ],
      },
      {
        path: 'branches',
        children: [
          {
            path: '',
            component: BranchesComponent,
          },
          {
            path: 'create',
            component: AddBranchesComponent,
          },
          {
            path: 'edit/:id',
            component: EditBranchesComponent,
          },
        ],
      },
      {
        path: 'subscription-plans',
        children: [
          {
            path: '',
            component: SubscribeComponent,
          },
          {
            path: 'create',
            component: AddSubscribeComponent,
          },
          {
            path: 'edit/:id',
            component: EditSubscribeComponent,
          },
        ],
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
      },
      {
        path: 'contact-us-appliers',
        component: AppliersComponent,
      },
      {
        path: 'partners',
        component: PartnersComponent,
      },
      {
        path: 'job-applicants',
        component: ApplicantsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
