import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { PartnerService } from 'src/app/services/partner/partner.service';

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
