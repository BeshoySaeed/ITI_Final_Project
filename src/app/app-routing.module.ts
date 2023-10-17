import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'admin/users',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
