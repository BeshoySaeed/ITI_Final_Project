import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BranchesComponent } from './branches/branches.component';
import { ContactUsComponent } from './Contact Us page/contact-us/contact-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { JobAppComponent } from './job-app/job-app.component';
import { AllItemsComponent } from './menu-module/components/all-items/all-items.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
  },
  {
    path: 'branches',
    component: BranchesComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'become-partner',
    component: BecomePartnerComponent,
  },
  {
    path: 'job-application',
    component: JobAppComponent,
  },
  {
    path: 'all-items',
    component: AllItemsComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
