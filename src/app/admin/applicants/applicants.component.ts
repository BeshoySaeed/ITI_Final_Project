import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent {
  applicants = [
    {
      id: 1,
      jobTitle:'chief',
      firstName: 'Gerges',
      lastName: "Medhat",
      email: "gergesmedhat@gmail.com",
      mobile: "01288436939",
      education:"test 1",
      cv: "/images/myw3schoolsimage1.jpg",

   
    },

    {
      id: 2,
      jobTitle:'waiter',
      firstName: 'Seif',
      lastName: "Hany",
      email: "seifhany@gmail.com",
      mobile: "01142648754",
      education: "test 2",
      cv: "/images/myw3schoolsimage2.jpg",
    },

  ];

  loading: boolean = false;

  ngOnInit() {
  }

  clear(table: Table) {
      table.clear();
  }

  applyFilterGlobal($event:any, dt:any, stringVal:string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteapplicant(id:number) {
    console.log(id)
  }
  toggleapplicant(applicant: any) {
    if (applicant.checked) {
      console.log('fdsafa');
    } else {
      console.log('sadfas');
    }
  }
}
