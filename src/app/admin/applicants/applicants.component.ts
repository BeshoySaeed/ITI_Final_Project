import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { ApplicantsService } from 'src/app/services/applicant/applicants.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent {



  id:any;

  
  loading: boolean = false;
  applicants: any;
  constructor(private route :ActivatedRoute,private dataServices: ApplicantsService) { }
  ngOnInit():void {
  
    this.id = this.route.snapshot.params["id"] ;
    this.getApplicantsData();
  
  }
  
  getApplicantsData() {
    this.dataServices.getAllApplicantss().subscribe(res => {
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
