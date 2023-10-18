import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhoneComponent } from './contactus/phones/phone/phone.component';
import { EmailComponent } from './contactus/emails/email/email.component';
import { SocialComponent } from './contactus/social/social/social.component';
import { EditPhoneComponent } from './contactus/phones/edit-phone/edit-phone.component';
import { EditEmailComponent } from './contactus/emails/edit-email/edit-email.component';
import { EditSocialComponent } from './contactus/social/edit-social/edit-social.component';

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
            component:SocialComponent,
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
