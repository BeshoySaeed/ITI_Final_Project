import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { ContactUsService } from 'src/app/services/contact-us/contact-us.service';

@Component({
  selector: 'app-appliers',
  templateUrl: './appliers.component.html',
  styleUrls: ['./appliers.component.scss']
})
export class AppliersComponent {
  appliers = 
    {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
   
    };

  



  loading: boolean = false;
  applicants: any;
  constructor(private route :ActivatedRoute,private dataServices: ContactUsService) { }
  ngOnInit():void {
  
    this.getApplicantsData();
  
  }
  
  getApplicantsData() {
    this.dataServices.getAllContacts().subscribe(res => {
      this.applicants = res;
      console.log(this.applicants);
    })
  }
  

  clear(table: Table) {
      table.clear();
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteApplier(id:number) {
    console.log(id)
  }
  toggleApplier(applier: any) {
    if (applier.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
