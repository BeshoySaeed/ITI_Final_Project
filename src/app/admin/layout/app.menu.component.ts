import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            // {
            //     label: 'Home',
            //     items: [
            //         { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
            //     ]
            // },
            {
                label: 'Users',
                items: [
                    { label: 'All users', icon: 'pi pi-fw pi-users', routerLink: ['/admin/users'] },
                    { label: 'Add user', icon: 'pi pi-fw pi-user-plus', routerLink: ['/admin/users/create'] },
                ]
            },
        ];
    }
}
