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

const routes: Routes = [
  {
    path: 'admin',
    // This layout component will render in apps router-outlet
    component: AppLayoutComponent,
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
            component: EditPhoneComponent,
          },
          {
            path: 'emails/create',
            component: EditEmailComponent,
          },
        ],
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
