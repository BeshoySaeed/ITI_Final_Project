import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerServicePhonesService } from 'src/app/services/Customer service data/phones/customer-service-phones.service';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.scss'],
})
export class EditPhoneComponent {
  EditPhone!: FormGroup;
  phoneId = this.activeRoute.snapshot.params['id'];
  phone: any = {};
  loader = true;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private phonesService: CustomerServicePhonesService
  ) {}

  ngOnInit() {
    this.initializeForm();
    
    this.getPhoneById()
      .then((response) => {
        this.phone = response.data;
      })
      .then(() => {
        this.EditPhone.controls['phone'].setValue(this.phone.phone)
        this.EditPhone.controls['active'].setValue(this.phone.active == 'active' ? true : false)
        this.loader = false
      })
      .catch((error) => {
        console.error(error);
      });
  }

  initializeForm () {
    this.EditPhone = this.fb.group({
      phone: ["", Validators.pattern(/^\+20-1\d{9}$/)],
      active: [""],
    });
  }

  getPhoneById(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.phonesService.getPhoneById(this.phoneId).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  onSubmit() {
    console.log(this.EditPhone);
  }
}
