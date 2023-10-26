import { Component, Pipe, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';
import { SocialMediaAccount } from 'src/app/interface/social-media-account';
import { SocialMediaAccountsService } from 'src/app/services/Social media accounts/social-media-accounts.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  loading: boolean = true;
  socials: SocialMediaAccount[] = [];

  constructor(private socialsService: SocialMediaAccountsService) {}

  ngOnInit() {
    this.getAllSocials();
  }

  getAllSocials() {
    this.socialsService.getAll().subscribe((socials: any) => {
      this.socials = socials.data;
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
