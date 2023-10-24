import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { PartnerService } from 'src/app/services/partner.service';
// import { Bartner } from 'src/app/interface/partners';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {



  id:any;

  // partner = new Bartner();

  loading: boolean = false;
  partners: any;
  constructor(private route :ActivatedRoute,private dataServices: PartnerService) { }
  ngOnInit():void {
this.getBartnerData();
  }

  getBartnerData() {
    this.dataServices.getAllBartners().subscribe(res => {
      this.partners = res;
      console.log(this.partners);
    })
  }
  // insertBranchData() {
    // this.dataServices.insertBartners(this.partners).subscribe(res => {

      // console.log(res);
    // })
  // }

  clear(table: Table) {
      table.clear();
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  // deletepartner(id:number) {
  //   console.log(id)
  // }
  togglepartner(partner: any) {
    if (partner.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
