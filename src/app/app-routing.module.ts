import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { ContactUsComponent } from './Contact Us page/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "branches",
    component: BranchesComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
