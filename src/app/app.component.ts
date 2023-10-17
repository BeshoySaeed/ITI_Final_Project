import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppSidebarComponent } from './admin/layout/app.sidebar.component';
import { AppTopBarComponent } from './admin/layout/app.topbar.component';
import { LayoutService } from './admin/layout/service/app.layout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'final-project';
}
