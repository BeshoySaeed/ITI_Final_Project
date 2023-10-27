import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { NewPasswordComponent } from './user/new-password/new-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'admin/orders',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user-routing.module').then((m) => m.UserRoutingModule),
  },
  { 
    path: 'forget-password',
    component:ForgetPasswordComponent
  },
  { 
    path: 'reset-password',
    component:NewPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
