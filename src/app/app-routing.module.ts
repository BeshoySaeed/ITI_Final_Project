import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { ContactUsComponent } from './Contact Us page/contact-us/contact-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: "branches",
    component: BranchesComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "login", 
    component: LoginFormComponent
  },
  {
    path: "aboutus",
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
