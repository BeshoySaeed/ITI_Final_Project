import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerServicePhonesService } from 'src/app/services/Customer service data/phones/customer-service-phones.service';
import { MessageService } from 'primeng/api';
import { CustomerServicePhone } from 'src/app/interface/customer-service-phone';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.scss'],
  providers: [MessageService],
})
export class EditPhoneComponent {
  EditPhone!: FormGroup;
  phoneId = this.activeRoute.snapshot.params['id'];
  phone!: CustomerServicePhone;
  loader = true;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private phonesService: CustomerServicePhonesService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.initializeForm();

    this.getPhoneById()
      .then((response) => {
        this.phone = response.data;
      })
      .then(() => {
        this.EditPhone.controls['phone'].setValue(this.phone.phone);
        this.EditPhone.controls['active'].setValue(
          this.phone.active == 1 ? true : false
        );
        this.loader = false;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  initializeForm() {
    this.EditPhone = this.fb.group({
      phone: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      active: [''],
    });
  }

  getPhoneById(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.phonesService.getById(this.phoneId).subscribe(
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
    this.loader = true;
    this.phonesService
      .update(this.phoneId, this.EditPhone.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Phone is updated',
          });
          this.loader = false;
        }
      });
  }
}
