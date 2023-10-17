import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AddUserComponent } from './users/add-user/add-user.component';

const routes: Routes = [
  {
    path: 'admin',
    // This layout component will render in apps router-outlet
    component: AppLayoutComponent,
    children: [
      {
        path:"users",
        component: UsersComponent
      },
      {
        path:"users/create",
        component: AddUserComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
