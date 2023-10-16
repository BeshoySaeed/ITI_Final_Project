import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment/payment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BranchesComponent } from './branches/branches.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './Contact Us page/contact-us/contact-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { JobAppComponent } from './job-app/job-app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart-module/cart/cart.component';
import { AllItemsComponent } from './menu-module/components/all-items/all-items.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'branches',
    component: BranchesComponent,
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
    path: 'cart',
    component: CartComponent,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
