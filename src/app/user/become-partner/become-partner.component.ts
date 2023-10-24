import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { Bartner } from 'src/app/interface/partners';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-become-partner',
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.scss'],
})
export class BecomePartnerComponent implements OnInit {
  partnerForm!: FormGroup;


id:any;

partner = {
  first_name : '',
    last_name:'',
    email: '',
    subject:'',
        mobile: '',
    message: ''
};

loading: boolean = false;
partners: any;
constructor(private fb: FormBuilder,private route :ActivatedRoute,private dataServices: PartnerService) { }


  ngOnInit(): void {
      // this.getBartnerData();
      
      

    this.partnerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      //  password: ['', [Validators.required,Validators.minLength(8)]] (?=.*?[!@#%^&*()_+-=[]{}|;':\",./<>?~`])
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
          ),
        ],
      ],
      message: ['', [Validators.required]],
    });
  }

  // submitPartnerForm() {
  //   console.log(this.partnerForm);
  // }

  get first_name() {
    return this.partnerForm.get('first_name');
  }
  get last_name() {
    return this.partnerForm.get('last_name');
  }
  get email() {
    return this.partnerForm.get('email');
  }
  get mobile() {
    return this.partnerForm.get('mobile');
  }
  get subject() {
    return this.partnerForm.get('subject');
  }
  get message() {
    return this.partnerForm.get('message');
  }
// getBartnerData() {
//   this.dataServices.getAllBartners().subscribe(res => {
//     this.partners = res;
//     console.log(this.partners);
//   })
// }
// insertBartnerData() {
  // console.log(this.partner);
//   this.dataServices.insertBartners({
//     first_name :'saad',
//   last_name:'hossam',
//   email:'saad@gmail.com',
//   mobile:'01111111111',
//   subject:'saad',
//   message:'ddddddddd'
// }
// ).subscribe(res => {

//     console.log(res);
//   })
// }
// }

insertBartnerData() {
  console.log(this.partner);
  this.dataServices.insertBartners(this.partner).subscribe(res => {

    console.log(res);
  })
}

clear(table: Table) {
    table.clear();
}

applyFilterGlobal($event:any, dt:any, stringVal:string) {
  dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}

togglepartner(partner: any) {
  if (partner.checked) {
    console.log('fdsafa');
  } else {
    console.log('sadfas');
  }
}
}
