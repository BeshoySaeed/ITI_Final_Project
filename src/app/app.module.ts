import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AdminRoutingModule,
    UserRoutingModule,
    SharedModule,
    AppRoutingModule,
    AdminModule,
    UserModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
